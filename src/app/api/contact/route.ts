import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
	name?: string;
	phone?: string;
	type?: string;
	timeline?: string;
	details?: string;
};

function clean(value: unknown) {
	return String(value || '').trim();
}

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as ContactPayload;

		const name = clean(body.name);
		const phone = clean(body.phone);
		const type = clean(body.type);
		const timeline = clean(body.timeline);
		const details = clean(body.details);

		if (!name || !phone || !type) {
			return NextResponse.json(
				{
					error: 'Missing required fields.',
				},
				{ status: 400 },
			);
		}

		if (!process.env.RESEND_API_KEY) {
			return NextResponse.json(
				{
					error: 'Missing RESEND_API_KEY.',
				},
				{ status: 500 },
			);
		}

		const toEmail =
			process.env.CONTACT_TO_EMAIL || 'MirelezConstruction@gmail.com';
		const fromEmail =
			process.env.CONTACT_FROM_EMAIL ||
			'Mirelez Construction <onboarding@resend.dev>';

		const subject = `New estimate request from ${name}`;

		const html = `
			<div style="font-family: Arial, sans-serif; color: #15110c; line-height: 1.6;">
				<h1 style="margin-bottom: 16px;">New Estimate Request</h1>

				<table style="width: 100%; border-collapse: collapse;">
					<tr>
						<td style="padding: 8px 0; font-weight: bold;">Name</td>
						<td style="padding: 8px 0;">${name}</td>
					</tr>
					<tr>
						<td style="padding: 8px 0; font-weight: bold;">Phone</td>
						<td style="padding: 8px 0;">${phone}</td>
					</tr>
					<tr>
						<td style="padding: 8px 0; font-weight: bold;">Project Type</td>
						<td style="padding: 8px 0;">${type}</td>
					</tr>
					<tr>
						<td style="padding: 8px 0; font-weight: bold;">Timeline</td>
						<td style="padding: 8px 0;">${timeline || 'Not provided'}</td>
					</tr>
				</table>

				<h2 style="margin-top: 24px;">Project Details</h2>
				<p>${details || 'No details provided.'}</p>
			</div>
		`;

		const text = `
New Estimate Request

Name: ${name}
Phone: ${phone}
Project Type: ${type}
Timeline: ${timeline || 'Not provided'}

Project Details:
${details || 'No details provided.'}
		`;

		const { data, error } = await resend.emails.send({
			from: fromEmail,
			to: [toEmail],
			replyTo: toEmail,
			subject,
			html,
			text,
		});

		if (error) {
			return NextResponse.json({ error }, { status: 500 });
		}

		return NextResponse.json({ ok: true, data });
	} catch {
		return NextResponse.json(
			{
				error: 'Unable to send message.',
			},
			{ status: 500 },
		);
	}
}
