import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Mail,
  Phone,
  Sparkles,
  CheckCircle2,
  Code2,
  Send,
  ExternalLink,
  ShieldCheck
} from 'lucide-react'
import { Link, usePath } from '../components/Router.jsx'
import { TEAM_MEMBERS } from '../components/FoundersAndTeamShowcase.jsx'

export default function TeamMemberProfilePage() {
  const { path, navigate } = usePath()

  // Extract member ID from path, e.g. /team/kiran or /team/jeyawin
  const rawId = path.split('/team/')[1] || 'kiran'
  const currentIdx = TEAM_MEMBERS.findIndex((m) => m.id === rawId)
  const safeIdx = currentIdx !== -1 ? currentIdx : 4 // Default to Kiran if not found
  const member = TEAM_MEMBERS[safeIdx]

  const prevMember = TEAM_MEMBERS[(safeIdx - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length]
  const nextMember = TEAM_MEMBERS[(safeIdx + 1) % TEAM_MEMBERS.length]

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') navigate(`/team/${prevMember.id}`)
      if (e.key === 'ArrowRight') navigate(`/team/${nextMember.id}`)
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prevMember.id, nextMember.id, navigate])

  return (
    <div className="min-h-screen bg-[#07060B] text-white relative flex flex-col justify-between overflow-hidden select-none">
      
      {/* ── BACKGROUND WATERMARK LETTER & AMBIENT STUDIO LIGHTING ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        {/* Soft Radial Backlight Spotlight behind model */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#6D28D9]/15 via-[#2D6A5D]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#A855F7]/10 via-transparent to-transparent rounded-full blur-3xl" />

        {/* Oversized Faint Watermark Initial Letter */}
        <span className="font-display font-black text-[28rem] sm:text-[36rem] lg:text-[46rem] text-white/[0.03] leading-none select-none transform -translate-x-20 sm:-translate-x-32 translate-y-6">
          {member.initial}
        </span>
      </div>

      {/* ── TOP HEADER ACTION BAR ── */}
      <header className="relative z-30 w-full px-6 sm:px-10 lg:px-16 pt-8 pb-4 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white font-mono text-xs font-bold transition-all backdrop-blur-md cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Close Button (X) */}
        <Link
          to="/"
          className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer group shadow-lg"
          aria-label="Close Profile"
        >
          <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </Link>
      </header>

      {/* ── MAIN STUDIO SPOTLIGHT STAGE ── */}
      <main className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 my-auto py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* LEFT / CENTER-LEFT: FULL-HEIGHT CHARACTER AVATAR WITH FLOOR SHADOW */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Previous Arrow Button (Desktop Left Edge) */}
          <Link
            to={`/team/${prevMember.id}`}
            className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-white/15 border border-white/15 text-white/70 hover:text-white flex items-center justify-center transition-all backdrop-blur-md z-30 cursor-pointer hidden sm:flex shadow-2xl group"
            aria-label={`Previous: ${prevMember.name}`}
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </Link>

          {/* Model Container with Ground Reflection & Shadow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.94, x: -25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.94, x: 25 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-64 sm:w-72 md:w-80 lg:w-[360px] h-[380px] sm:h-[460px] lg:h-[520px] rounded-[36px] overflow-hidden border-2 border-white/10 bg-gradient-to-b from-white/[0.03] to-black/60 shadow-2xl shadow-black/80 group"
            >
              {/* Portrait Photo */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-104 transition-transform duration-700 ease-out"
              />

              {/* Gradient Shading & Ambient Rim Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07060B] via-transparent to-transparent opacity-90 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9]/20 via-transparent to-transparent pointer-events-none" />

              {/* Status Floating Pill */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Leadership</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Soft Ground Shadow & Floor Reflection */}
          <div className="w-56 sm:w-72 h-4 bg-black/90 blur-lg rounded-full mt-2" />
        </div>

        {/* RIGHT SIDE: SPOTLIGHT DETAILS & EXECUTIVE NARRATIVE */}
        <div className="lg:col-span-7 space-y-6 relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Role / Tag Badge (Matching the user screenshot style) */}
              <div className="inline-block">
                <div className="px-5 py-2.5 rounded-lg bg-[#2D6A5D] border border-emerald-400/30 text-white font-mono font-black text-xs sm:text-sm tracking-[0.18em] uppercase shadow-lg">
                  {member.badge}
                </div>
              </div>

              {/* Member Name */}
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none">
                {member.name}
              </h1>

              {/* Official Role Subtitle */}
              <div className="text-sm sm:text-base font-mono font-bold text-[#C084FC] tracking-wider uppercase">
                {member.role} &bull; <span className="text-slate-400">{member.specialty}</span>
              </div>

              {/* Executive Bio / Narrative Paragraph (Exact style of user screenshot) */}
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose font-normal max-w-2xl text-justify">
                {member.bio}
              </p>

              {/* Core Skills Badges */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Key Responsibilities &amp; Core Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.skillsList?.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C084FC]/50 text-slate-200 text-xs font-mono font-semibold transition-colors shadow-2xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Connect Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-purple-500/25 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-bold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  <span>Start Project Discussion</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Next Arrow Button (Desktop Right Edge) */}
          <Link
            to={`/team/${nextMember.id}`}
            className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-white/15 border border-white/15 text-white/70 hover:text-white flex items-center justify-center transition-all backdrop-blur-md z-30 cursor-pointer hidden sm:flex shadow-2xl group"
            aria-label={`Next: ${nextMember.name}`}
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </Link>

        </div>

      </main>

      {/* ── BOTTOM TEAM MEMBER CAROUSEL SWITCHER ── */}
      <footer className="relative z-30 w-full px-6 sm:px-10 lg:px-16 py-6 border-t border-white/10 bg-[#07060B]/90 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between flex-wrap gap-4">
          
          <div className="text-xs font-mono text-slate-400">
            <span className="text-white font-bold">{safeIdx + 1}</span> of <span className="text-slate-400">{TEAM_MEMBERS.length}</span> Team Leaders
          </div>

          {/* Quick Member Avatars Row */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0">
            {TEAM_MEMBERS.map((m, mIdx) => {
              const isSelected = m.id === member.id
              return (
                <Link
                  key={m.id}
                  to={`/team/${m.id}`}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#2D6A5D] border border-emerald-400/50 text-white scale-105 shadow-md shadow-emerald-950'
                      : 'bg-white/5 hover:bg-white/15 border border-white/10 text-slate-400 hover:text-white scale-100'
                  }`}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="text-xs font-display font-bold">{m.name}</span>
                </Link>
              )
            })}
          </div>

        </div>
      </footer>

    </div>
  )
}
