'use client';

import {
	type ReactNode,
	type FormEvent,
	useEffect,
	useRef,
	useState,
	useCallback,
} from 'react';

/* ─── PALETTE & TOKENS ─────────────────────────────────────────── */
// Stone dark: #0E0C09  Stone mid: #1C1810  Stone warm: #2A2318
// Bronze:     #B8874A  Gold:       #D4A85A  Cream:      #F2EDE3
// Muted:      #8A8070  Whisper:    #C4BAA8

const services = [
	{
		n: '001',
		title: 'Custom Homes',
		sub: 'Ground-up residential construction built with precision and permanence.',
		stat: '200+ Built',
	},
	{
		n: '002',
		title: 'Full Remodels',
		sub: 'Kitchen, bath, whole-home transformations that command higher valuations.',
		stat: '150+ Completed',
	},
	{
		n: '003',
		title: 'Commercial',
		sub: 'Fit-outs and builds for business owners who demand reliability.',
		stat: '50+ Projects',
	},
];

const processSteps = [
	{
		n: '01',
		title: 'Consult',
		body: 'Scope, timeline, and expectations defined before a single estimate begins.',
	},
	{
		n: '02',
		title: 'Plan',
		body: 'Uncertainty resolved into a clear path — milestones, priorities, next steps.',
	},
	{
		n: '03',
		title: 'Build',
		body: 'Managed with precision, communication, and craft at every stage.',
	},
	{
		n: '04',
		title: 'Deliver',
		body: 'A final walkthrough where every detail has been made intentional.',
	},
];

const navItems = [
	{ label: 'Services', href: '#services' },
	{ label: 'Process', href: '#process' },
	{ label: 'Work', href: '#work' },
	{ label: 'Contact', href: '#contact' },
];

/* ─── GLOBAL STYLES ─────────────────────────────────────────────── */
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --stone:    #0E0C09;
    --stone-2:  #1C1810;
    --stone-3:  #2A2318;
    --bronze:   #B8874A;
    --gold:     #D4A85A;
    --cream:    #F2EDE3;
    --muted:    #8A8070;
    --whisper:  #C4BAA8;
    --serif:    'Cormorant Garamond', Georgia, serif;
    --mono:     'DM Mono', monospace;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--stone);
    color: var(--cream);
    font-family: var(--mono);
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.04em;
    overflow-x: hidden;
    cursor: none;
  }

  ::selection { background: var(--bronze); color: var(--stone); }

  a { color: inherit; text-decoration: none; }

  /* ── Custom cursor ── */
  .cursor-dot {
    position: fixed;
    width: 6px; height: 6px;
    background: var(--gold);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s, opacity 0.3s;
    will-change: left, top;
  }

  .cursor-ring {
    position: fixed;
    width: 36px; height: 36px;
    border: 1px solid rgba(180,130,60,0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: left 0.12s ease, top 0.12s ease, width 0.3s, height 0.3s, border-color 0.3s;
    will-change: left, top;
  }

  body:has(a:hover) .cursor-ring,
  body:has(button:hover) .cursor-ring {
    width: 60px; height: 60px;
    border-color: var(--bronze);
  }

  /* ── Noise overlay ── */
  .noise {
    position: fixed; inset: 0; z-index: 1;
    pointer-events: none;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px;
  }

  /* ── Header ── */
  .header {
    position: fixed; inset-x: 0; top: 0; z-index: 50;
    display: flex; align-items: center; justify-content: space-between;
    padding: 28px 60px;
    transition: padding 0.5s, background 0.5s;
  }

  .header.scrolled {
    padding: 18px 60px;
    background: rgba(14,12,9,0.88);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(180,130,60,0.12);
  }

  .logo-wordmark {
    font-family: var(--serif);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--cream);
  }

  .logo-sub {
    display: block;
    font-family: var(--mono);
    font-size: 9px;
    font-weight: 300;
    letter-spacing: 0.38em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 3px;
  }

  .nav-desktop {
    display: flex; gap: 48px;
    list-style: none;
  }

  .nav-desktop a {
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--muted);
    position: relative;
    transition: color 0.3s;
  }

  .nav-desktop a::after {
    content: '';
    position: absolute; bottom: -3px; left: 0; right: 100%;
    height: 1px; background: var(--bronze);
    transition: right 0.4s cubic-bezier(0.4,0,0.2,1);
  }

  .nav-desktop a:hover { color: var(--cream); }
  .nav-desktop a:hover::after { right: 0; }

  .btn-cta {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 12px 28px;
    border: 1px solid rgba(180,130,60,0.4);
    font-size: 9px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    background: transparent;
    cursor: none;
    transition: background 0.3s, border-color 0.3s, color 0.3s;
  }

  .btn-cta:hover {
    background: var(--bronze);
    border-color: var(--bronze);
    color: var(--stone);
  }

  .btn-cta-solid {
    background: var(--bronze);
    border-color: var(--bronze);
    color: var(--stone);
  }

  .btn-cta-solid:hover {
    background: var(--gold);
    border-color: var(--gold);
  }

  /* ── Mobile nav ── */
  .hamburger {
    display: none;
    flex-direction: column; gap: 5px;
    background: none; border: none;
    cursor: none; padding: 8px;
  }

  .hamburger span {
    display: block; width: 22px; height: 1px;
    background: var(--cream);
    transition: transform 0.4s, opacity 0.4s;
  }

  .mobile-nav {
    position: fixed; inset: 0; z-index: 45;
    background: var(--stone-2);
    display: flex; flex-direction: column;
    justify-content: flex-end;
    padding: 40px 40px 60px;
    transform: translateY(-100%);
    transition: transform 0.6s cubic-bezier(0.76,0,0.24,1);
  }

  .mobile-nav.open { transform: translateY(0); }

  .mobile-nav a {
    display: block;
    font-family: var(--serif);
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 300;
    color: var(--cream);
    padding: 16px 0;
    border-bottom: 1px solid rgba(180,130,60,0.15);
    transition: color 0.3s, padding-left 0.4s;
  }

  .mobile-nav a:hover { color: var(--gold); padding-left: 20px; }

  /* ── Hero ── */
  .hero {
    position: relative;
    min-height: 100svh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
  }

  .hero-left {
    position: relative; z-index: 10;
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 0 60px 80px;
  }

  .hero-eyebrow {
    display: flex; align-items: center; gap: 16px;
    font-size: 9px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: var(--bronze);
    margin-bottom: 32px;
  }

  .hero-eyebrow::before {
    content: '';
    display: inline-block;
    width: 40px; height: 1px;
    background: var(--bronze);
  }

  .hero-h1 {
    font-family: var(--serif);
    font-size: clamp(4.5rem, 8vw, 9rem);
    font-weight: 300;
    line-height: 0.92;
    letter-spacing: -0.02em;
    color: var(--cream);
  }

  .hero-h1 em {
    font-style: italic;
    color: var(--gold);
    display: block;
  }

  .hero-sub {
    margin-top: 40px;
    max-width: 380px;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.9;
    color: var(--muted);
  }

  .hero-actions {
    margin-top: 48px;
    display: flex; align-items: center; gap: 36px;
  }

  .hero-link {
    font-size: 10px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--muted);
    display: flex; align-items: center; gap: 10px;
    transition: color 0.3s;
  }

  .hero-link::after {
    content: '→';
    transition: transform 0.3s;
  }

  .hero-link:hover { color: var(--cream); }
  .hero-link:hover::after { transform: translateX(6px); }

  .hero-right {
    position: relative; overflow: hidden;
  }

  .hero-right-inner {
    position: absolute; inset: 0;
    background: var(--stone-3);
  }

  .hero-grid-overlay {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(180,130,60,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(180,130,60,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .hero-fade-left {
    position: absolute; inset: 0;
    background: linear-gradient(to right, var(--stone) 0%, transparent 40%);
    z-index: 5;
  }

  .hero-fade-bottom {
    position: absolute; inset: 0;
    background: linear-gradient(to top, var(--stone) 0%, transparent 30%);
    z-index: 5;
  }

  .hero-stats {
    position: absolute; bottom: 80px; right: 60px; z-index: 10;
    display: flex; flex-direction: column; gap: 28px;
    text-align: right;
  }

  .hero-stat-val {
    font-family: var(--serif);
    font-size: 3rem;
    font-weight: 300;
    color: var(--cream);
    line-height: 1;
  }

  .hero-stat-label {
    font-size: 9px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 6px;
  }

  .hero-scroll-hint {
    position: absolute; bottom: 36px; left: 50%; transform: translateX(-50%);
    z-index: 10;
    display: flex; flex-direction: column; align-items: center; gap: 12px;
    font-size: 8px; letter-spacing: 0.4em; text-transform: uppercase; color: var(--muted);
  }

  .scroll-line {
    width: 1px; height: 60px;
    background: linear-gradient(to bottom, var(--bronze), transparent);
    animation: scrollPulse 2.4s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; transform: scaleY(0.7); transform-origin: top; }
    50% { opacity: 1; transform: scaleY(1); }
  }

  /* ── Marquee ── */
  .marquee-wrap {
    overflow: hidden;
    border-top: 1px solid rgba(180,130,60,0.12);
    border-bottom: 1px solid rgba(180,130,60,0.12);
    background: rgba(180,130,60,0.04);
    padding: 16px 0;
  }

  .marquee-track {
    display: flex; gap: 64px;
    animation: marquee 28s linear infinite;
    width: max-content;
  }

  .marquee-item {
    display: flex; align-items: center; gap: 20px;
    font-size: 9px; letter-spacing: 0.38em; text-transform: uppercase;
    color: var(--muted); white-space: nowrap;
  }

  .marquee-dot { color: var(--bronze); font-size: 6px; }

  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── Section shared ── */
  .section-eyebrow {
    display: flex; align-items: center; gap: 16px;
    font-size: 9px; letter-spacing: 0.4em; text-transform: uppercase;
    color: var(--bronze);
    margin-bottom: 48px;
  }

  .section-eyebrow::before {
    content: '';
    width: 32px; height: 1px; background: var(--bronze);
  }

  .section-h2 {
    font-family: var(--serif);
    font-size: clamp(2.8rem, 5.5vw, 6rem);
    font-weight: 300;
    line-height: 1.0;
    letter-spacing: -0.025em;
    color: var(--cream);
  }

  .section-h2 em {
    font-style: italic;
    color: var(--gold);
  }

  /* ── Services ── */
  .services-section {
    background: var(--cream);
    color: var(--stone);
    padding: 120px 60px;
    position: relative;
    overflow: hidden;
  }

  .services-section .section-eyebrow { color: var(--bronze); }
  .services-section .section-eyebrow::before { background: var(--bronze); }

  .services-section .section-h2 { color: var(--stone); }
  .services-section .section-h2 em { color: var(--bronze); }

  .services-intro-p {
    max-width: 440px;
    font-size: 14px;
    line-height: 1.9;
    color: #6B5E4E;
    margin-top: 24px;
  }

  .services-grid {
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid rgba(138,112,80,0.2);
  }

  .service-card {
    padding: 56px 44px;
    border-right: 1px solid rgba(138,112,80,0.2);
    position: relative;
    overflow: hidden;
    transition: background 0.4s;
  }

  .service-card:last-child { border-right: none; }

  .service-card::before {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 100%;
    height: 3px; background: var(--bronze);
    transition: right 0.6s cubic-bezier(0.4,0,0.2,1);
  }

  .service-card:hover { background: rgba(180,130,60,0.04); }
  .service-card:hover::before { right: 0; }

  .service-num {
    font-size: 9px; letter-spacing: 0.35em;
    text-transform: uppercase; color: var(--bronze);
  }

  .service-title {
    font-family: var(--serif);
    font-size: 2.2rem;
    font-weight: 400;
    color: var(--stone);
    margin-top: 32px;
    line-height: 1.1;
  }

  .service-sub {
    font-size: 13px;
    line-height: 1.9;
    color: #6B5E4E;
    margin-top: 20px;
  }

  .service-stat {
    margin-top: 40px;
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--bronze);
  }

  .service-stat::before {
    content: ''; display: inline-block;
    width: 20px; height: 1px; background: var(--bronze);
  }

  /* ── Process ── */
  .process-section {
    background: var(--stone-2);
    padding: 120px 60px;
    position: relative;
    overflow: hidden;
  }

  .process-bg-num {
    position: absolute; right: 40px; top: 40px;
    font-family: var(--serif);
    font-size: min(30vw, 420px);
    font-weight: 300;
    color: rgba(180,130,60,0.04);
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  .process-intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin-bottom: 80px;
    align-items: end;
  }

  .process-intro-p {
    font-size: 14px; line-height: 1.9; color: var(--muted);
    align-self: end;
  }

  .process-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(180,130,60,0.15);
    gap: 0;
  }

  .process-step {
    padding: 56px 44px 56px 0;
    border-right: 1px solid rgba(180,130,60,0.1);
    position: relative;
  }

  .process-step:last-child { border-right: none; }

  .process-step-bg {
    font-family: var(--serif);
    font-size: 7rem;
    font-weight: 300;
    color: rgba(180,130,60,0.08);
    line-height: 1;
    margin-bottom: 8px;
  }

  .process-step-title {
    font-family: var(--serif);
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--cream);
    margin-bottom: 16px;
  }

  .process-step-body {
    font-size: 13px; line-height: 1.9; color: var(--muted);
  }

  /* ── Work / Transformations ── */
  .work-section {
    background: var(--stone);
    padding: 120px 60px;
    overflow: hidden;
  }

  .work-intro {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 72px;
    gap: 40px;
  }

  .work-intro-p {
    max-width: 400px;
    font-size: 14px; line-height: 1.9; color: var(--muted);
    align-self: flex-end;
  }

  .work-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    grid-template-rows: auto auto;
    gap: 3px;
  }

  .work-featured {
    grid-row: 1 / 3;
    position: relative;
    overflow: hidden;
    background: var(--stone-3);
    aspect-ratio: 3/4;
  }

  .work-card {
    position: relative;
    overflow: hidden;
    background: var(--stone-3);
    aspect-ratio: 4/3;
  }

  .work-card-inner {
    position: absolute; inset: 0;
    display: flex; align-items: flex-end;
    padding: 32px;
    z-index: 10;
    background: linear-gradient(to top, rgba(14,12,9,0.85) 0%, transparent 55%);
    opacity: 0;
    transition: opacity 0.4s;
  }

  .work-featured .work-card-inner {
    opacity: 1;
    background: linear-gradient(to top, rgba(14,12,9,0.9) 0%, transparent 45%);
  }

  .work-card:hover .work-card-inner { opacity: 1; }

  .work-card-label {
    font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase;
    color: var(--bronze); margin-bottom: 8px;
  }

  .work-card-title {
    font-family: var(--serif);
    font-size: 1.6rem; font-weight: 300;
    color: var(--cream); line-height: 1.2;
  }

  /* ── Before/After Slider ── */
  .ba-wrapper {
    position: absolute; inset: 0; cursor: ew-resize;
  }

  .ba-before, .ba-after {
    position: absolute; inset: 0;
  }

  .ba-handle {
    position: absolute; top: 0; bottom: 0;
    width: 2px; background: var(--gold);
    z-index: 20;
    transform: translateX(-50%);
  }

  .ba-btn {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 48px; height: 48px;
    border-radius: 50%;
    background: var(--bronze);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; color: var(--stone);
    box-shadow: 0 0 0 3px rgba(180,130,60,0.3);
    cursor: ew-resize;
  }

  .ba-label {
    position: absolute; top: 20px; z-index: 30;
    font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
    background: rgba(14,12,9,0.7);
    padding: 6px 12px; color: var(--cream);
  }

  .ba-label-before { left: 20px; }
  .ba-label-after  { right: 20px; }

  /* ── Contact ── */
  .contact-section {
    background: var(--stone-2);
    padding: 120px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }

  .contact-detail {
    display: flex; align-items: center; gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(180,130,60,0.12);
  }

  .contact-icon {
    width: 44px; height: 44px; flex-shrink: 0;
    border: 1px solid rgba(180,130,60,0.25);
    display: flex; align-items: center; justify-content: center;
    color: var(--bronze); font-size: 16px;
  }

  .contact-detail-label {
    font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 4px;
  }

  .contact-detail-val {
    font-size: 13px; color: var(--cream);
  }

  /* ── Form ── */
  .form-wrap {
    border: 1px solid rgba(180,130,60,0.15);
    background: rgba(180,130,60,0.02);
    padding: 56px;
  }

  .form-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
    margin-bottom: 20px;
  }

  .form-field { margin-bottom: 20px; }
  .form-field:last-child { margin-bottom: 0; }

  .form-label {
    display: block;
    font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 10px;
  }

  .form-input {
    width: 100%;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(180,130,60,0.15);
    padding: 14px 16px;
    font-family: var(--mono);
    font-size: 13px;
    font-weight: 300;
    color: var(--cream);
    outline: none;
    transition: border-color 0.3s, background 0.3s;
    cursor: none;
  }

  .form-input:focus {
    border-color: rgba(180,130,60,0.5);
    background: rgba(180,130,60,0.04);
  }

  .form-input::placeholder { color: var(--muted); opacity: 0.6; }

  .form-input option {
    background: var(--stone-2); color: var(--cream);
  }

  .form-textarea {
    min-height: 130px; resize: vertical;
  }

  .form-btn {
    width: 100%; margin-top: 32px;
    display: flex; align-items: center; justify-content: center; gap: 12px;
    padding: 18px;
    background: var(--bronze);
    border: none; outline: none;
    font-family: var(--mono);
    font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--stone);
    cursor: none;
    transition: background 0.3s;
  }

  .form-btn:hover:not(:disabled) { background: var(--gold); }
  .form-btn:disabled { opacity: 0.7; }

  .form-btn-success { background: #3A6A28; color: var(--cream); }
  .form-btn-error   { background: #6A3A28; color: var(--cream); }

  /* ── Footer ── */
  .footer {
    border-top: 1px solid rgba(180,130,60,0.12);
    background: var(--stone);
    padding: 32px 60px;
    display: flex; align-items: center; justify-content: space-between;
  }

  .footer-logo {
    font-family: var(--serif);
    font-size: 14px; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--cream);
  }

  .footer-copy {
    font-size: 9px; letter-spacing: 0.28em;
    text-transform: uppercase; color: var(--muted);
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .header { padding: 24px 32px; }
    .header.scrolled { padding: 16px 32px; }
    .nav-desktop, .header .btn-cta, .header .phone-link { display: none; }
    .hamburger { display: flex; }

    .hero { grid-template-columns: 1fr; min-height: 100svh; }
    .hero-right { display: none; }
    .hero-left { padding: 0 32px 80px; }
    .hero-stats { right: 32px; bottom: 80px; }
    .hero-scroll-hint { display: none; }

    .services-section { padding: 80px 32px; }
    .services-grid { grid-template-columns: 1fr; }
    .service-card { border-right: none; border-bottom: 1px solid rgba(138,112,80,0.2); }
    .service-card:last-child { border-bottom: none; }

    .process-section { padding: 80px 32px; }
    .process-intro { grid-template-columns: 1fr; gap: 24px; }
    .process-steps { grid-template-columns: 1fr 1fr; }

    .work-section { padding: 80px 32px; }
    .work-intro { flex-direction: column; align-items: flex-start; }
    .work-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
    .work-featured { grid-row: auto; aspect-ratio: 16/9; }
    .work-featured .work-card-inner { opacity: 1; }
    .work-card .work-card-inner { opacity: 1; }

    .contact-section { grid-template-columns: 1fr; gap: 60px; padding: 80px 32px; }
    .form-wrap { padding: 32px; }
    .form-row { grid-template-columns: 1fr; }

    .footer { padding: 24px 32px; flex-direction: column; gap: 12px; text-align: center; }
  }

  @media (max-width: 640px) {
    .hero-h1 { font-size: 3.8rem; }
    .process-steps { grid-template-columns: 1fr; }
    .hero-stats { position: static; text-align: left; margin-top: 40px; flex-direction: row; flex-wrap: wrap; gap: 24px 48px; }
  }
`;

/* ─── CONSTRUCTION SVG ILLUSTRATIONS ───────────────────────────── */
function HeroIllustration() {
	return (
		<svg
			viewBox="0 0 560 780"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				position: 'absolute',
				inset: 0,
				width: '100%',
				height: '100%',
				objectFit: 'cover',
				opacity: 0.5,
			}}
			aria-hidden="true"
		>
			{/* Sky gradient bg */}
			<rect width="560" height="780" fill="#1C1810" />
			{/* Grid lines */}
			{Array.from({ length: 10 }).map((_, i) => (
				<line
					key={`h${i}`}
					x1="0"
					y1={i * 78}
					x2="560"
					y2={i * 78}
					stroke="#B8874A"
					strokeWidth="0.3"
					strokeOpacity="0.15"
				/>
			))}
			{Array.from({ length: 10 }).map((_, i) => (
				<line
					key={`v${i}`}
					x1={i * 56}
					y1="0"
					x2={i * 56}
					y2="780"
					stroke="#B8874A"
					strokeWidth="0.3"
					strokeOpacity="0.15"
				/>
			))}
			{/* House outline - dramatic large */}
			<g opacity="0.7">
				{/* Roof */}
				<polygon
					points="280,60 520,280 40,280"
					stroke="#D4A85A"
					strokeWidth="1.5"
					fill="none"
				/>
				{/* Ridge */}
				<line
					x1="280"
					y1="60"
					x2="280"
					y2="280"
					stroke="#B8874A"
					strokeWidth="0.7"
					strokeDasharray="8,5"
				/>
				{/* Walls */}
				<rect
					x="60"
					y="280"
					width="440"
					height="440"
					stroke="#D4A85A"
					strokeWidth="1.5"
					fill="none"
				/>
				{/* Door */}
				<rect
					x="232"
					y="500"
					width="96"
					height="220"
					stroke="#B8874A"
					strokeWidth="1"
					fill="none"
				/>
				<circle cx="316" cy="615" r="5" fill="#B8874A" />
				{/* Windows left */}
				<rect
					x="90"
					y="340"
					width="100"
					height="80"
					stroke="#B8874A"
					strokeWidth="0.8"
					fill="rgba(180,130,60,0.05)"
				/>
				<line
					x1="140"
					y1="340"
					x2="140"
					y2="420"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				<line
					x1="90"
					y1="380"
					x2="190"
					y2="380"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				{/* Windows right */}
				<rect
					x="370"
					y="340"
					width="100"
					height="80"
					stroke="#B8874A"
					strokeWidth="0.8"
					fill="rgba(180,130,60,0.05)"
				/>
				<line
					x1="420"
					y1="340"
					x2="420"
					y2="420"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				<line
					x1="370"
					y1="380"
					x2="470"
					y2="380"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				{/* Upper windows */}
				<rect
					x="90"
					y="450"
					width="100"
					height="70"
					stroke="#B8874A"
					strokeWidth="0.8"
					fill="rgba(180,130,60,0.05)"
				/>
				<line
					x1="140"
					y1="450"
					x2="140"
					y2="520"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				<rect
					x="370"
					y="450"
					width="100"
					height="70"
					stroke="#B8874A"
					strokeWidth="0.8"
					fill="rgba(180,130,60,0.05)"
				/>
				<line
					x1="420"
					y1="450"
					x2="420"
					y2="520"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				{/* Foundation line */}
				<line
					x1="20"
					y1="720"
					x2="540"
					y2="720"
					stroke="#B8874A"
					strokeWidth="0.8"
					strokeOpacity="0.5"
				/>
				{/* Chimney */}
				<rect
					x="380"
					y="100"
					width="40"
					height="90"
					stroke="#D4A85A"
					strokeWidth="1"
					fill="none"
				/>
			</g>
			{/* Dimension annotations */}
			<g opacity="0.4">
				<line
					x1="20"
					y1="280"
					x2="20"
					y2="720"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				<line
					x1="15"
					y1="280"
					x2="25"
					y2="280"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				<line
					x1="15"
					y1="720"
					x2="25"
					y2="720"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				<text
					x="12"
					y="505"
					fill="#B8874A"
					fontSize="8"
					fontFamily="DM Mono, monospace"
					letterSpacing="1"
					textAnchor="middle"
					transform="rotate(-90 12 505)"
				>
					14.6M
				</text>
				<line
					x1="60"
					y1="750"
					x2="500"
					y2="750"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				<line
					x1="60"
					y1="745"
					x2="60"
					y2="755"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				<line
					x1="500"
					y1="745"
					x2="500"
					y2="755"
					stroke="#B8874A"
					strokeWidth="0.5"
				/>
				<text
					x="280"
					y="766"
					fill="#B8874A"
					fontSize="8"
					fontFamily="DM Mono, monospace"
					letterSpacing="1"
					textAnchor="middle"
				>
					22.4M
				</text>
			</g>
			{/* Corner marks */}
			{[
				[60, 280],
				[500, 280],
				[60, 720],
				[500, 720],
			].map(([x, y], i) => (
				<g key={i} opacity="0.5">
					<line
						x1={x - 8}
						y1={y}
						x2={x + 8}
						y2={y}
						stroke="#D4A85A"
						strokeWidth="0.8"
					/>
					<line
						x1={x}
						y1={y - 8}
						x2={x}
						y2={y + 8}
						stroke="#D4A85A"
						strokeWidth="0.8"
					/>
				</g>
			))}
		</svg>
	);
}

function KitchenBeforeSVG() {
	return (
		<svg
			viewBox="0 0 700 500"
			style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
			aria-hidden="true"
		>
			<rect width="700" height="500" fill="#3A2E20" />
			<rect y="100" width="700" height="230" fill="#4A3A28" />
			<rect y="100" width="700" height="14" fill="#302418" />
			{[0, 115, 230, 345, 460].map(x => (
				<g key={x}>
					<rect
						x={x + 5}
						y="118"
						width="105"
						height="195"
						fill="#302418"
						rx="1"
					/>
					<rect
						x={x + 10}
						y="124"
						width="95"
						height="183"
						fill="#3A2E20"
						rx="1"
					/>
					<rect
						x={x + 48}
						y="213"
						width="18"
						height="6"
						rx="2"
						fill="#5A4A38"
					/>
				</g>
			))}
			<rect y="330" width="700" height="22" fill="#5A4A38" />
			<rect y="352" width="700" height="60" fill="#6A5A48" />
			<rect y="412" width="700" height="88" fill="#2A2018" />
			<rect y="60" width="700" height="40" fill="#2A2018" />
			<text
				x="350"
				y="38"
				textAnchor="middle"
				fill="#5A4A38"
				fontFamily="DM Mono, monospace"
				fontSize="11"
				letterSpacing="5"
			>
				BEFORE
			</text>
		</svg>
	);
}

function KitchenAfterSVG() {
	return (
		<svg
			viewBox="0 0 700 500"
			style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
			aria-hidden="true"
		>
			<rect width="700" height="500" fill="#F0EBE0" />
			<rect y="100" width="700" height="230" fill="#FAFAF8" />
			<rect y="100" width="700" height="8" fill="#E0D8C8" />
			{[0, 115, 230, 345, 460].map(x => (
				<g key={x}>
					<rect
						x={x + 5}
						y="110"
						width="105"
						height="212"
						fill="#F5F2EC"
						rx="1"
					/>
					<rect
						x={x + 12}
						y="118"
						width="91"
						height="196"
						fill="#FFFFFF"
						rx="1"
					/>
					<rect
						x={x + 14}
						y="120"
						width="87"
						height="192"
						fill="none"
						stroke="#E0D8C8"
						strokeWidth="1.5"
						rx="1"
					/>
					<rect
						x={x + 46}
						y="212"
						width="20"
						height="6"
						rx="2"
						fill="#B8874A"
					/>
				</g>
			))}
			<rect y="322" width="700" height="20" fill="#E0D8C8" />
			<rect y="342" width="700" height="58" fill="#F5F0E8" />
			<rect y="400" width="700" height="100" fill="#C8B890" />
			<rect y="60" width="700" height="40" fill="#F0EBE0" />
			<text
				x="350"
				y="38"
				textAnchor="middle"
				fill="#8A7860"
				fontFamily="DM Mono, monospace"
				fontSize="11"
				letterSpacing="5"
			>
				AFTER
			</text>
		</svg>
	);
}

function BathSVG() {
	return (
		<svg
			viewBox="0 0 500 420"
			style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
			aria-hidden="true"
		>
			<rect width="500" height="420" fill="#1C1810" />
			<rect
				x="40"
				y="60"
				width="420"
				height="320"
				fill="#F0EBE0"
				opacity="0.9"
			/>
			{/* Tile pattern */}
			{Array.from({ length: 7 }).map((_, row) =>
				Array.from({ length: 9 }).map((_, col) => (
					<rect
						key={`${row}-${col}`}
						x={40 + col * 47}
						y={60 + row * 46}
						width="46"
						height="44"
						fill="none"
						stroke="#E0D8C8"
						strokeWidth="0.5"
					/>
				)),
			)}
			{/* Freestanding tub */}
			<ellipse
				cx="170"
				cy="280"
				rx="110"
				ry="55"
				fill="#FFFFFF"
				stroke="#D0C8B8"
				strokeWidth="2"
			/>
			<ellipse cx="170" cy="265" rx="95" ry="42" fill="#F0F4F8" />
			{/* Vanity */}
			<rect
				x="290"
				y="180"
				width="160"
				height="70"
				fill="#FFFFFF"
				stroke="#D0C8B8"
				strokeWidth="1.5"
			/>
			<ellipse
				cx="370"
				cy="180"
				rx="60"
				ry="12"
				fill="#F5F5F5"
				stroke="#D0C8B8"
				strokeWidth="1"
			/>
			{/* Faucet */}
			<rect x="362" y="155" width="16" height="25" fill="#C8C0B0" rx="2" />
			{/* Accent */}
			<rect x="40" y="60" width="420" height="4" fill="#B8874A" opacity="0.6" />
		</svg>
	);
}

function CommercialSVG() {
	return (
		<svg
			viewBox="0 0 500 420"
			style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
			aria-hidden="true"
		>
			<rect width="500" height="420" fill="#0E0C09" />
			<rect x="30" y="40" width="440" height="340" fill="#1C1810" />
			<rect
				x="30"
				y="40"
				width="440"
				height="10"
				fill="#B8874A"
				opacity="0.8"
			/>
			{/* Glass facade */}
			{Array.from({ length: 5 }).map((_, col) =>
				Array.from({ length: 4 }).map((_, row) => (
					<rect
						key={`${row}-${col}`}
						x={50 + col * 84}
						y={70 + row * 70}
						width="72"
						height="58"
						fill="#1A2A3A"
						stroke="#2A3A4A"
						strokeWidth="0.8"
					/>
				)),
			)}
			{/* Entry */}
			<rect
				x="200"
				y="260"
				width="100"
				height="120"
				fill="#152030"
				stroke="#B8874A"
				strokeWidth="1"
			/>
			<circle cx="288" cy="323" r="4" fill="#B8874A" />
			{/* Sign */}
			<rect
				x="150"
				y="50"
				width="200"
				height="24"
				fill="rgba(180,130,60,0.15)"
			/>
			<text
				x="250"
				y="67"
				textAnchor="middle"
				fill="#B8874A"
				fontFamily="DM Mono, monospace"
				fontSize="9"
				letterSpacing="4"
			>
				COMMERCIAL BUILD-OUT
			</text>
			{/* Lights */}
			{[80, 164, 248, 332, 416].map(x => (
				<circle key={x} cx={x} cy="50" r="3" fill="#D4A85A" opacity="0.7" />
			))}
		</svg>
	);
}

/* ─── BEFORE/AFTER SLIDER ─────────────────────────────────────── */
function BeforeAfterSlider() {
	const wrapRef = useRef<HTMLDivElement>(null);
	const [pos, setPos] = useState(50);
	const [dragging, setDragging] = useState(false);

	const update = useCallback((clientX: number) => {
		const el = wrapRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		setPos(
			Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100)),
		);
	}, []);

	useEffect(() => {
		const onMove = (e: PointerEvent) => {
			if (dragging) update(e.clientX);
		};
		const onUp = () => setDragging(false);
		window.addEventListener('pointermove', onMove);
		window.addEventListener('pointerup', onUp);
		return () => {
			window.removeEventListener('pointermove', onMove);
			window.removeEventListener('pointerup', onUp);
		};
	}, [dragging, update]);

	return (
		<div
			ref={wrapRef}
			className="ba-wrapper"
			onPointerDown={e => {
				setDragging(true);
				update(e.clientX);
			}}
		>
			<div className="ba-before">
				<KitchenBeforeSVG />
			</div>
			<div
				className="ba-after"
				style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
			>
				<KitchenAfterSVG />
			</div>
			<span className="ba-label ba-label-before">Before</span>
			<span className="ba-label ba-label-after">After</span>
			<div className="ba-handle" style={{ left: `${pos}%` }}>
				<div className="ba-btn">⇔</div>
			</div>
		</div>
	);
}

/* ─── CURSOR ────────────────────────────────────────────────────── */
function CustomCursor() {
	const dot = useRef<HTMLDivElement>(null);
	const ring = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let dotX = 0,
			dotY = 0,
			ringX = 0,
			ringY = 0,
			raf = 0;

		const onMove = (e: MouseEvent) => {
			dotX = e.clientX;
			dotY = e.clientY;
		};

		const animate = () => {
			ringX += (dotX - ringX) * 0.15;
			ringY += (dotY - ringY) * 0.15;
			if (dot.current) {
				dot.current.style.left = dotX + 'px';
				dot.current.style.top = dotY + 'px';
			}
			if (ring.current) {
				ring.current.style.left = ringX + 'px';
				ring.current.style.top = ringY + 'px';
			}
			raf = requestAnimationFrame(animate);
		};

		window.addEventListener('mousemove', onMove);
		raf = requestAnimationFrame(animate);
		return () => {
			window.removeEventListener('mousemove', onMove);
			cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<>
			<div ref={dot} className="cursor-dot" />
			<div ref={ring} className="cursor-ring" />
		</>
	);
}

/* ─── MAIN ──────────────────────────────────────────────────────── */
export default function HomePage() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [mobileOpen]);

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: globalCSS }} />
			<CustomCursor />
			<div className="noise" aria-hidden="true" />

			{/* ── HEADER ── */}
			<header className={`header ${scrolled || mobileOpen ? 'scrolled' : ''}`}>
				<a href="#" aria-label="Mirelez Construction">
					<span className="logo-wordmark">Mirelez</span>
					<span className="logo-sub">Construction · Est. 2003</span>
				</a>

				<nav aria-label="Primary navigation">
					<ul className="nav-desktop">
						{navItems.map(item => (
							<li key={item.href}>
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
				</nav>

				<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
					<a
						href="tel:2096311892"
						className="phone-link"
						style={{
							fontSize: 10,
							letterSpacing: '0.25em',
							textTransform: 'uppercase',
							color: 'var(--muted)',
							transition: 'color 0.3s',
						}}
						onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
						onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
					>
						209.631.1892
					</a>
					<a href="#contact" className="btn-cta">
						Request Estimate <span>→</span>
					</a>
				</div>

				<button
					type="button"
					className="hamburger"
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={mobileOpen}
					onClick={() => setMobileOpen(v => !v)}
				>
					<span
						style={
							mobileOpen
								? { transform: 'rotate(45deg) translate(4px,4px)' }
								: {}
						}
					/>
					<span style={mobileOpen ? { opacity: 0 } : {}} />
					<span
						style={
							mobileOpen
								? { transform: 'rotate(-45deg) translate(4px,-4px)' }
								: {}
						}
					/>
				</button>
			</header>

			{/* ── MOBILE NAV ── */}
			<nav
				className={`mobile-nav ${mobileOpen ? 'open' : ''}`}
				aria-label="Mobile navigation"
			>
				{navItems.map(item => (
					<a
						key={item.href}
						href={item.href}
						onClick={() => setMobileOpen(false)}
					>
						{item.label}
					</a>
				))}
				<a
					href="#contact"
					onClick={() => setMobileOpen(false)}
					style={{
						marginTop: 40,
						display: 'inline-flex',
						alignItems: 'center',
						gap: 12,
						padding: '16px 32px',
						background: 'var(--bronze)',
						fontFamily: 'var(--mono)',
						fontSize: 10,
						letterSpacing: '0.3em',
						textTransform: 'uppercase',
						color: 'var(--stone)',
						fontWeight: 400,
					}}
				>
					Request Estimate →
				</a>
			</nav>

			<main>
				{/* ── HERO ── */}
				<section className="hero">
					<div className="hero-left">
						<div className="hero-eyebrow">Central Valley · Est. 2003</div>

						<h1 className="hero-h1">
							Built With
							<br />
							<em>Integrity.</em>
							Shown With
							<br />
							<em>Confidence.</em>
						</h1>

						<p className="hero-sub">
							Premium residential and commercial construction — where
							craftsmanship speaks before a single phone call is made.
						</p>

						<div className="hero-actions">
							<a href="#work" className="btn-cta btn-cta-solid">
								Explore Work <span>→</span>
							</a>
							<a href="#contact" className="hero-link">
								Request Estimate
							</a>
						</div>
					</div>

					<div className="hero-right">
						<div className="hero-right-inner">
							<div className="hero-grid-overlay" aria-hidden="true" />
							<HeroIllustration />
							<div className="hero-fade-left" aria-hidden="true" />
							<div className="hero-fade-bottom" aria-hidden="true" />
						</div>
					</div>

					{/* Stats */}
					<div className="hero-stats">
						{[
							['20+', 'Years Building'],
							['400+', 'Projects Done'],
							['100%', 'Client Focus'],
						].map(([val, label]) => (
							<div key={label}>
								<div className="hero-stat-val">{val}</div>
								<div className="hero-stat-label">{label}</div>
							</div>
						))}
					</div>

					<div className="hero-scroll-hint" aria-hidden="true">
						<div className="scroll-line" />
						Scroll
					</div>
				</section>

				{/* ── MARQUEE ── */}
				<div className="marquee-wrap" aria-hidden="true">
					<div className="marquee-track">
						{[...Array(3)].flatMap((_, i) =>
							[
								'Custom Homes',
								'Kitchen Remodels',
								'Bathroom Renovations',
								'Commercial Build-Outs',
								'Central Valley',
								'Licensed & Insured',
								'Whole-Home Additions',
							].map(item => (
								<span key={`${item}-${i}`} className="marquee-item">
									<span className="marquee-dot">◆</span>
									{item}
								</span>
							)),
						)}
					</div>
				</div>

				{/* ── SERVICES ── */}
				<section id="services" className="services-section">
					<div className="section-eyebrow">Services</div>
					<h2 className="section-h2">
						Built for residential
						<br />
						and <em>commercial</em> confidence.
					</h2>
					<p className="services-intro-p">
						Every service presented to make a project feel proven, organized,
						and worth a higher-trust conversation.
					</p>

					<div className="services-grid">
						{services.map(s => (
							<article key={s.n} className="service-card">
								<div className="service-num">{s.n}</div>
								<h3 className="service-title">{s.title}</h3>
								<p className="service-sub">{s.sub}</p>
								<span className="service-stat">{s.stat}</span>
							</article>
						))}
					</div>
				</section>

				{/* ── PROCESS ── */}
				<section id="process" className="process-section">
					<div className="process-bg-num" aria-hidden="true">
						04
					</div>

					<div className="process-intro">
						<div>
							<div className="section-eyebrow">Process</div>
							<h2 className="section-h2">
								A clear process builds
								<br />
								confidence <em>before</em>
								<br />
								the estimate.
							</h2>
						</div>
						<p className="process-intro-p">
							People do not just hire craftsmanship — they hire confidence. A
							polished, transparent process shows clients that the project will
							be managed with care, communication, and follow-through from day
							one.
						</p>
					</div>

					<div className="process-steps">
						{processSteps.map(step => (
							<article key={step.n} className="process-step">
								<div className="process-step-bg" aria-hidden="true">
									{step.n}
								</div>
								<h3 className="process-step-title">{step.title}</h3>
								<p className="process-step-body">{step.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* ── WORK ── */}
				<section id="work" className="work-section">
					<div className="work-intro">
						<div>
							<div className="section-eyebrow">Transformations</div>
							<h2 className="section-h2">
								Before-and-after proof
								<br />
								that <em>sells</em> the craft.
							</h2>
						</div>
						<p className="work-intro-p">
							Visual proof, process clarity, and craftsmanship storytelling —
							all before a client makes the first move.
						</p>
					</div>

					<div className="work-grid">
						{/* Featured slider */}
						<div className="work-featured">
							<BeforeAfterSlider />
							<div className="work-card-inner" style={{ opacity: 1 }}>
								<div>
									<div className="work-card-label">
										Featured Transformation · Drag to Compare
									</div>
									<div className="work-card-title">
										Complete Kitchen Remodel
									</div>
								</div>
							</div>
						</div>

						{/* Card 1 */}
						<article className="work-card">
							<div style={{ position: 'absolute', inset: 0 }}>
								<BathSVG />
							</div>
							<div className="work-card-inner">
								<div>
									<div className="work-card-label">Residential</div>
									<div className="work-card-title">Master Bath Renovation</div>
								</div>
							</div>
						</article>

						{/* Card 2 */}
						<article className="work-card">
							<div style={{ position: 'absolute', inset: 0 }}>
								<CommercialSVG />
							</div>
							<div className="work-card-inner">
								<div>
									<div className="work-card-label">Commercial</div>
									<div className="work-card-title">
										Office Build-Out & Facade
									</div>
								</div>
							</div>
						</article>
					</div>
				</section>

				{/* ── CONTACT ── */}
				<ContactSection />
			</main>

			<footer className="footer">
				<span className="footer-logo">Mirelez Construction</span>
				<span className="footer-copy">
					© 2026 · Central Valley, CA · All Rights Reserved
				</span>
			</footer>
		</>
	);
}

function ContactSection() {
	const [status, setStatus] = useState<'idle' | 'error' | 'sending' | 'sent'>(
		'idle',
	);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const name = String(fd.get('name') || '').trim();
		const phone = String(fd.get('phone') || '').trim();
		const type = String(fd.get('type') || '').trim();

		if (!name || !phone || !type) {
			setStatus('error');
			setTimeout(() => setStatus('idle'), 2500);
			return;
		}

		setStatus('sending');
		setTimeout(() => {
			setStatus('sent');
			(e.target as HTMLFormElement).reset();
		}, 1200);
	}

	return (
		<section id="contact" className="contact-section">
			<div>
				<div className="section-eyebrow">Request Consultation</div>
				<h2 className="section-h2" style={{ color: 'var(--cream)' }}>
					Ready to
					<br />
					discuss a <em>project?</em>
				</h2>
				<p
					style={{
						marginTop: 24,
						maxWidth: 380,
						fontSize: 13,
						lineHeight: 1.9,
						color: 'var(--muted)',
					}}
				>
					This is where serious conversations begin. Tell us about your project
					— scope, location, timeline — and we will be in touch within one
					business day.
				</p>

				<div style={{ marginTop: 48 }}>
					{[
						{
							icon: '📍',
							label: 'Location',
							val: 'Central Valley, California',
						},
						{ icon: '✉', label: 'Email', val: 'info@mirelezconstruction.com' },
						{ icon: '☎', label: 'Phone', val: '209.631.1892' },
					].map(({ icon, label, val }) => (
						<div key={label} className="contact-detail">
							<div className="contact-icon" style={{ fontSize: 18 }}>
								{icon}
							</div>
							<div>
								<div className="contact-detail-label">{label}</div>
								<div className="contact-detail-val">{val}</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div>
				<form onSubmit={handleSubmit} className="form-wrap">
					<div className="form-row">
						<div className="form-field">
							<label className="form-label" htmlFor="cf-name">
								Full Name
							</label>
							<input
								id="cf-name"
								name="name"
								type="text"
								placeholder="John Smith"
								autoComplete="name"
								className="form-input"
							/>
						</div>
						<div className="form-field">
							<label className="form-label" htmlFor="cf-phone">
								Phone Number
							</label>
							<input
								id="cf-phone"
								name="phone"
								type="tel"
								placeholder="(209) 000-0000"
								autoComplete="tel"
								className="form-input"
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-field">
							<label className="form-label" htmlFor="cf-type">
								Project Type
							</label>
							<select id="cf-type" name="type" className="form-input">
								<option value="">Select a service</option>
								<option>Custom Home</option>
								<option>Kitchen Remodel</option>
								<option>Bathroom Renovation</option>
								<option>Whole-Home Remodel</option>
								<option>Addition</option>
								<option>Commercial</option>
							</select>
						</div>
						<div className="form-field">
							<label className="form-label" htmlFor="cf-timeline">
								Estimated Timeline
							</label>
							<select id="cf-timeline" name="timeline" className="form-input">
								<option value="">When to start?</option>
								<option>Immediately</option>
								<option>Within 3 months</option>
								<option>Within 6 months</option>
								<option>Just exploring</option>
							</select>
						</div>
					</div>

					<div className="form-field">
						<label className="form-label" htmlFor="cf-details">
							Project Details
						</label>
						<textarea
							id="cf-details"
							name="details"
							placeholder="Tell us about your project — scope, vision, must-haves, and any details that help us prepare."
							className="form-input form-textarea"
						/>
					</div>

					<button
						type="submit"
						disabled={status === 'sending' || status === 'sent'}
						className={`form-btn ${status === 'sent' ? 'form-btn-success' : status === 'error' ? 'form-btn-error' : ''}`}
					>
						{status === 'error' && 'Please fill in required fields'}
						{status === 'sending' && 'Sending…'}
						{status === 'sent' && "✓ Request Sent — We'll be in touch"}
						{status === 'idle' && (
							<>
								Request Consultation <span>→</span>
							</>
						)}
					</button>
				</form>
			</div>
		</section>
	);
}
