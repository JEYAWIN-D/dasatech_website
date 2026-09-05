import React from 'react'
import { Pill, GraduationCap, Factory, Boxes, Camera, ShoppingCart } from 'lucide-react'

const PROJECTS_SHOWCASE = [
  {
    id: 'medflow',
    name: 'MedFlow Pharmacy Software',
    tagline: 'Pharmacy Operations & Billing',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=85',
    icon: Pill,
    badge: 'HEALTHCARE'
  },
  {
    id: 'educore',
    name: 'EduCore School System',
    tagline: 'School & Campus Management',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=85',
    icon: GraduationCap,
    badge: 'EDUCATION'
  },
  {
    id: 'factorysync',
    name: 'IoT Factory Automation',
    tagline: 'Smart Factory & Production Tracking',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=85',
    icon: Factory,
    badge: 'IOT AUTOMATION'
  },
  {
    id: 'wareflex',
    name: 'WareFlex Warehouse System',
    tagline: 'Smart Inventory & Stock Control',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=85',
    icon: Boxes,
    badge: 'WAREHOUSE & LOGISTICS'
  },
  {
    id: 'snapshare',
    name: 'SnapShare Photography Studio',
    tagline: 'AI Photo Galleries & Event Studio CRM',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=85',
    icon: Camera,
    badge: 'PHOTOGRAPHY'
  },
  {
    id: 'commerceengine',
    name: 'CommerceEngine Store',
    tagline: 'Online E-Commerce & Fast Checkout',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=85',
    icon: ShoppingCart,
    badge: 'E-COMMERCE'
  }
]

const INFINITE_ITEMS = [...PROJECTS_SHOWCASE, ...PROJECTS_SHOWCASE, ...PROJECTS_SHOWCASE]

export default function TechMarquee() {
  return (
    <section className="w-full py-6 bg-white border-y border-[#E9E2F5] overflow-hidden relative select-none z-20">
      
      {/* Marquee Track Container */}
      <div className="w-full overflow-hidden relative py-3">
        <div className="animate-marquee flex items-center gap-6 w-max py-1">
          {INFINITE_ITEMS.map((item, idx) => {
            const Icon = item.icon

            return (
              <div
                key={`${item.id}-${idx}`}
                className="flex items-center gap-4 p-3.5 pr-6 rounded-2xl transition-all duration-300 shrink-0 cursor-pointer group bg-[#F5F0FF]/60 border border-[#E9E2F5] hover:border-[#6C2BD9] hover:bg-white hover:shadow-lg hover:-translate-y-0.5 shadow-2xs"
              >
                {/* Big Image Thumbnail */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E9E2F5] bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#6C2BD9]/15 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Logo Icon & Text */}
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-[#6C2BD9]/90 group-hover:bg-[#6C2BD9] text-white transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-display font-black text-base leading-tight text-[#17121F] group-hover:text-[#6C2BD9] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-xs font-mono font-semibold text-[#6F6878] mt-1">
                    {item.tagline}
                  </div>
                </div>

                {/* Badge Tag */}
                <span className="ml-3 text-[10px] font-mono font-bold px-3 py-1 rounded-full border uppercase tracking-wider transition-colors bg-white text-[#6C2BD9] border-[#DDD0FF] group-hover:bg-[#6C2BD9] group-hover:text-white group-hover:border-[#6C2BD9]">
                  {item.badge}
                </span>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

