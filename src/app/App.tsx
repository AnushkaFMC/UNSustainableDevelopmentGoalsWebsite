import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import conwayLogo from "@/imports/image.png";

const toRad = (d: number) => (d * Math.PI) / 180;

interface SDG {
  id: number;
  title: string;
  color: string;
  emoji: string;
  description: string;
  points: string[];
}

const SDGS: SDG[] = [
  {
    id: 1, title: "No Poverty", color: "#E5243B", emoji: "🏠",
    description: "End poverty in all its forms everywhere.",
    points: [
      "Founding member of Goal 17, a local social enterprise dedicated to ending youth homelessness",
      "Founding member of Veteran Owned UK, supporting the growth of Veteran owned businesses",
      "Working with Royal British Legion Industries in supporting UK's Veteran community",
      "Partnered with Street Soccer to help disadvantaged young people find a long-term career pathway",
      "My Dream, a financial support program to support employees in achieving their dream or wish",
    ],
  },
  {
    id: 2, title: "Zero Hunger", color: "#DDA63A", emoji: "🌾",
    description: "End hunger, achieve food security and promote sustainable agriculture.",
    points: [
      "Supporting staff volunteering at \"We've Got Your Back\", a community interest group providing food banks across communities",
      "Supported Medway Foodbank Campaign in partnership with Rochester Bridge Trust",
      "Supporting National Highways' groceries donation program",
      "Annual food donations from all staffs during Christmas time",
      "Free food vouchers provided to employees across the business",
    ],
  },
  {
    id: 3, title: "Good Health & Well-being", color: "#4C9F38", emoji: "❤️",
    description: "Ensure healthy lives and promote well-being for all at all ages.",
    points: [
      "Employer Assistance Programme provided by \"Lighthouse Charity\" and \"We Care\" that provides 24/7 services to online GP, mental health counselling and fitness programs",
      "\"Big Ten in 10\", our ten-year strategy for eliminating the potential of the ten biggest risks that cause life changing harm",
      "Well-being strategy that supports employees’ Emotional, Physical and Financial well-being",
      "Proud supporters of Samaritans, a charity dedicated to reducing feelings of isolation and disconnectio",
  "Working with “Mates in Mind” to help raise awareness and understanding of mental health and mental ill-health",
      "Access to discounted gym memberships and mindful yoga sessions carried out regularly",
      "Access to “Rewarding Great People”, a discounted online shopping platform for employees",
    ],
  },
  {
    id: 4, title: "Quality Education", color: "#C5192D", emoji: "📚",
    description: "Ensure inclusive and equitable quality education for all.",
    points: [
      "Founding member of \"London Construction Academy\", supporting adults from disadvantaged backgrounds by offering training in fundamental construction skills",
      "Conway Academy, an e-Learning platform offering range of professional and personal development courses", 
"Technical training courses offered through regulatory bodies like \"NPORS\", \"CABWI\", \"CITB\"",
"Tailored courses like Management Fundamentals and Great Leaders Programme, providing opportunities and career pathways to employees at different career stage", 
"Committed to increasing earn and learn opportunities across the UK by partnering with 5 % club",
"Work experience week hosted every year, bringing in young people of different age groups to get insights into practical training", 
"Supporter of Chapter One, a charity that helps children learn to read via online mentoring session",
"Successful Apprenticeship program with new cohorts each year",
"Encouraging mentorship for young engineers through the “Smallpeice Trust”",
      ,
    ],
  },
  {
    id: 5, title: "Gender Equality", color: "#FF3A21", emoji: "⚖️",
    description: "Achieve gender equality and empower all women and girls.",
    points: [
      "Committed to achieving 30% female representation by 2030 (30 by 30), creating an environment where women in construction are welcomed, represented and valued",
"LGBTQIA+ employee forum, encouraging discussions to better understand barriers to recruitment, and progression, and to learn how to overcome said barriers",
"Partnered with Transport for London on their Women in Transport and Engineering Programme, supporting women returning to work after career breaks, helping build confidence, develop employability skills and explore career opportunities",
"Partnered with Diversity Jobs Group network and WORK180 to provide job opportunities to a wide range of candidates including women and LGBTQIA+ community",
"Developed ‘Personal Best’, a programme that supports women to be their best and most confident selves, aspiring for leadership roles",
    ],
  },
  {
    id: 6, title: "Clean Water & Sanitation", color: "#26BDE2", emoji: "💧",
    description: "Ensure availability and sustainable management of water for all.",
    points: [
      "Dedicated Water & Drainage Management division, cleaning approximately 2 million gullies per year and recycling 15,000 tonnes of water per year",
"Smart water meters rolled out across sites, providing accurate, real-time data to help reduce unnecessary consumption and increase efficiency",
"Water harvesting system at depots, capturing, storing and utilising rainfall water",
"Water harvesting systems at welfare units reusing potable water",
"Designed and delivered Sustainable Drainage Systems  across central London, replenishing ground water, and alleviating pressure on conventional wastewater treatment networks",

    ],
  },
  {
    id: 7, title: "Affordable & Clean Energy", color: "#FCC30B", emoji: "☀️",
    description: "Ensure access to affordable, reliable, sustainable modern energy.",
    points: [
      "Renewable Energy Guarantees of Origin (REGO) certified renewable electricity supplied across all sites",
"Phase 3 compliant with Environmental Agency’s Energy Savings Opportunity Scheme (ESOS), helping identify inefficiencies and reduce unnecessary consumption",
"Switched all asphalt plants to mains electricity and clean burner fuels like Natural gas and LPG",
"Zero Emission Wharf operation at Erith Asphalt plant, reducing emissions and ensuring clean environment for employees operating at wharf",
"Solar panels installed at 2 key sites and on all towable welfare units",
"Trialled biogas at asphalt manufacturing plant for several project schemes",
"Completed a Hydrogen Feasibility study for asphalt production",
"40+ charge points installed across our sites, to support our electric car, van and HGV fleet",
      
    ],
  },
  {
    id: 8, title: "Decent Work & Growth", color: "#A21942", emoji: "💼",
    description: "Promote sustained, inclusive and sustainable economic growth.",
    points: [
      "Growing business since last 65 years, steadily expanding the workforce including apprenticeship training, work placement, and senior roles",
"Supporting Local businesses and individuals within the communities we serve through contracting and employment opportunities",
"Supporting transition to green economy through employment opportunities and a dedicated sustainability division",
"Partnered with London Construction Academy to provide employment pathways & learning opportunities",
"Financial support services like Benefit Entitlement, Budgeting, Debt Management provided via the Lighthouse Charity",
"Support to training courses and higher education opportunities provided to employees",
"Supported the RBLI’s training partner, ‘LifeWorks’, in their pre-employment course offering interview skills training and feedback",

    ],
  },
  {
    id: 9, title: "Industry & Innovation", color: "#FD6925", emoji: "🏗️",
    description: "Build resilient infrastructure and foster innovation.",
    points: [
      "In house pioneering Technology Centre, designing innovative road materials supporting resilient infrastructure",
"Circular economy is central to the business model, re-using and recycling over 500,000 tonnes of road and footway arisings per year",
"Developed Low Carbon Design matrices for roads and footways",
"Delivered a record-breaking scheme using conventional asphalt containing 92% recycled content",
"Active participation in the Vinci Innovation Award Program",
"Partnered with multiple academic institutions to research pioneering construction methods and materials ",
"Use of gully sensors across our work network to monitor water levels and efficiently plan maintenance",
"Partnered with various strategic partners including Shell, JCB, Volvo, Wirtgen",
"Work closely with clients in trialling innovative low carbon materials, vehicles and equipment",
     
    ],
  },
  {
    id: 10, title: "Reduced Inequalities", color: "#DD1367", emoji: "🤝",
    description: "Reduce inequality within and among countries.",
    points: [
      "Identified underrepresented groups within our business and developed Equity, Diversity, Inclusion strategy, creating 9 goals and setting targets around them to reduce inequalities",
"As a Disability Confident Leader, we ensure to attract, retain and support diverse workforce and communities we serve",
"Partnered with The Education People, a specialist employment service that offers a range of support to help individuals gain and sustain paid employment",
"Offered Apprenticeship programme to young people including ethnic minority groups",
"Disability Confident employee forum, inviting employees to actively engage and encourage discussions",
 "Disability Awareness e-learning module offered to all employees",
    ],
  },
  {
    id: 11, title: "Sustainable Cities", color: "#FD9D24", emoji: "🏙️",
    description: "Make cities and human settlements inclusive and sustainable.",
    points: [
      "Circular economy business model, responsibly sourcing and treating materials used in our business activities",
"Cycle to work scheme, offering access to significant savings on cycle and accessories used for commuting purposes",
"Redesigned Brighton central in partnership with WSP, and BHH council developing and maintaining sustainable cities",
"Designed and delivered several Sustainable Drainage Systems across different boroughs in London",
"Designed and delivered several Cycle Superhighways in partnership with AECON",
"Developed modern road networks and roundabouts in South- East England ",
"Strategy focused on air quality improvement in central London in partnership with Westminster and Imperial College London",

    ],
  },
  {
    id: 12, title: "Responsible Consumption", color: "#BF8B2E", emoji: "♻️",
    description: "Ensure sustainable consumption and production patterns.",
    points: [
      "Deliver low carbon construction designs in accordance with PAS 2080 carbon management hierarchy, focused on eliminating unnecessary work, maximum use of recycled materials, and use of low emission vehicles and equipment",
      "Reuse of paving materials on footways across London",
"Use of SureLayer, a proprietary asphalt mix with a thinner design compared to a standard asphalt mix, reducing material use whilst maintaining standards",
"Use of lower carbon cement (CEM II) as a default material in our projects",
"Recycling of Personal Protective Equipment after its end of use",
"Consistently engage with our suppliers to obtain Environmental Product Declarations and promote data transparency across the value chain",

      
    ],
  },
  {
    id: 13, title: "Climate Action", color: "#3F7E44", emoji: "🌍",
    description: "Take urgent action to combat climate change and its impacts.",
    points: [
      "We established a baseline year for emissions in 2019 and committed to achieving a 25% reduction by 2024, 50% reduction by 2030, and become a net zero organisation by 2045",
      "PAS 2080:2023 certified by BSI since 2024, a global standard for whole-life carbon management in infrastructure and the built environment",
"We are on track to achieve our target of converting 50% of vehicles <5 tonnes to zero-emission, while transitioning 100% of cars and vehicles >5 tonnes (including those under 1.5 tonnes) to electric",
"Partnered with Imperial College London’s Centre for Low Emission Construction to identify and reduce emissions from construction equipment in London, improving carbon performance and local air quality",
"Collaborating with our clients to support the delivery of their net zero targets by providing innovative, low carbon solutions",
    ],
  },
  {
    id: 14, title: "SDG 14 Life Below Water", color: "#0A97D9", emoji: "🐠",
    description: "Conserve and sustainably use the oceans and marine resources.",
    points: [
      "Not our area of business which we impact",
      
    ],
  },
  {
    id: 15, title: "Life on Land", color: "#56C02B", emoji: "🌿",
    description: "Protect, restore, and promote sustainable use of terrestrial ecosystems.",
    points: [
      "Corporate Sponsor/Member of Kent Wildlife Trust, helping to protect countryside and wildlife of Kent, England",
"5 of our key sites assessed based on Biodiversity Net Gain score",
"Developed planting schemes for transport for London, using native plants where possible",
"Planted and maintained plants in wild area at one of our key depots",
"Installation of bird boxes and bat boxes on several sites to provide homes for wildlife",

    ],
  },
  {
    id: 16, title: "Peace, Justice & Institutions", color: "#00689D", emoji: "🕊️",
    description: "Promote peaceful, inclusive societies for sustainable development.",
    points: [
      "Strict policies around modern slavery and ethical sourcing throughout our supply chain, promoting transparency and justice in our operations",
"Support Ban the Box to provide people with criminal records a fair chance to compete for jobs by removing related questions from the job application form",
"Speak Out app, offering a safe and confidential method for employees, and those who do business with us, to raise concerns and to report breaches of our standards or processes",

    ],
  },
  {
    id: 17, title: "Partnerships for Goals", color: "#19486A", emoji: "🌐",
    description: "Strengthen global partnerships for sustainable development.",
    points: [
      "Working in partnership with different councils to achieve a shared ambition of providing sustainable solutions and achieve Nation’s net zero target",
"We think creatively about reusing materials and embed circular economy principles in the projects we deliver to unlock environmental and financial benefits",
"We have partnered with National highways, JCB, Ryze Fuels, Sany, and Volvo in deploying UK’s first one of a kind low carbon schemes and will continue to do so",
"Partnered with Imperial College’s Centre for Low Emission Construction and Westminster City Council to improve carbon performance and local air quality",
"Continued use of higher RAP, cleaner energy, zero emission fleet and equipment in partnership with different clients",
    ],
  },
];

const SVG_SIZE = 800;
const CX = SVG_SIZE / 2;
const CY = SVG_SIZE / 2;
const INNER_R = 168;
const OUTER_R = 326;
const GAP = 1.4;
const SECTOR = 360 / 17;
const MID_R = (INNER_R + OUTER_R) / 2;

function makePath(i: number, rInner: number, rOuter: number): string {
  const s = i * SECTOR - 90 + GAP / 2;
  const e = (i + 1) * SECTOR - 90 - GAP / 2;
  const cs = Math.cos(toRad(s)), ss = Math.sin(toRad(s));
  const ce = Math.cos(toRad(e)), se = Math.sin(toRad(e));
  return [
    `M ${CX + rOuter * cs} ${CY + rOuter * ss}`,
    `A ${rOuter} ${rOuter} 0 0 1 ${CX + rOuter * ce} ${CY + rOuter * se}`,
    `L ${CX + rInner * ce} ${CY + rInner * se}`,
    `A ${rInner} ${rInner} 0 0 0 ${CX + rInner * cs} ${CY + rInner * ss}`,
    "Z",
  ].join(" ");
}

function midXY(i: number, r: number) {
  const midDeg = (i + 0.5) * SECTOR - 90;
  return {
    x: CX + r * Math.cos(toRad(midDeg)),
    y: CY + r * Math.sin(toRad(midDeg)),
  };
}

export default function App() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = SDGS.find((s) => s.id === activeId) ?? null;

  const centerPct = `${((INNER_R * 2) / SVG_SIZE) * 100}%`;
  const activeIndex = active ? SDGS.findIndex((s) => s.id === activeId) : -1;

  // Compute where the external panel anchors (just outside the sector)
  const panelAnchor = (() => {
    if (!active || activeIndex < 0) return null;
    const midDeg = (activeIndex + 0.5) * SECTOR - 90;
    const c = Math.cos(toRad(midDeg));
    const s = Math.sin(toRad(midDeg));
    const anchorR = OUTER_R + 20;
    const tx = c > 0.3 ? "0%" : c < -0.3 ? "-100%" : "-50%";
    const ty = s > 0.3 ? "0%" : s < -0.3 ? "-100%" : "-50%";
    return {
      left: `${((CX + anchorR * c) / SVG_SIZE) * 100}%`,
      top: `${((CY + anchorR * s) / SVG_SIZE) * 100}%`,
      transform: `translate(${tx}, ${ty})`,
    };
  })();

  return (
    <div
      className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center py-12 px-4"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      {/* Header */}
      <header className="text-center mb-8 max-w-xl">
        <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-2 font-semibold">
          FM CONWAY
        </p>
        <h1
          className="text-4xl sm:text-5xl font-black tracking-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a5c28" }}
        >
          FM Conway Contributing to Sustainable Development Goals
        </h1>
        <p className="text-muted-foreground text-sm mt-2">
          The United Nations Sustainable Development Goals (UNSDGs) provide a global framework for creating a more sustainable, inclusive, and prosperous future.
          Many aspects of our business approach contributes to achieving these goals
        </p>
      </header>

      {/* Wheel */}
      <div className="relative w-full" style={{ maxWidth: "min(760px, 85vw)", aspectRatio: "1", overflow: "visible" }}>
        <svg viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} className="w-full h-full"><circle></circle><circle></circle>{/* Outer decorative ring */}<circle></circle><circle
            cx={CX}
            cy={CY}
            r={OUTER_R + 14}
            fill="none"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
          /><circle
            cx={CX}
            cy={CY}
            r={OUTER_R + 6}
            fill="none"
            stroke="rgba(0,0,0,0.04)"
            strokeWidth="1"
          />{SDGS.map((sdg, i) => {
            const isActive = sdg.id === activeId;
            const { x, y } = midXY(i, MID_R);

            return (
              <g
                key={sdg.id}
                onMouseEnter={() => setActiveId(sdg.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => setActiveId(activeId === sdg.id ? null : sdg.id)}
                style={{ cursor: "pointer" }}
              >
                {/* Glow halo behind active sector */}
                {isActive && (
                  <path
                    d={makePath(i, INNER_R - 6, OUTER_R + 14)}
                    fill={sdg.color}
                    opacity="0.2"
                  />
                )}

                <path
                  d={makePath(i, INNER_R, OUTER_R)}
                  fill={sdg.color}
                  opacity={activeId === null ? 0.85 : isActive ? 1 : 0.28}
                  style={{ transition: "opacity 0.22s ease" }}
                />

                {/* SDG number */}
                <text
                  x={x}
                  y={y - 6}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="rgba(255,255,255,0.95)"
                  fontSize={isActive ? "33" : "28"}
                  fontWeight="800"
                  fontFamily="'Barlow Condensed', sans-serif"
                  opacity={activeId === null ? 1 : isActive ? 1 : 0.35}
                  style={{ pointerEvents: "none", transition: "opacity 0.22s ease" }}
                >
                  {String(sdg.id).padStart(2, "0")}
                </text>
              </g>
            );
          })}{/* Inner ring accent */}<circle
            cx={CX}
            cy={CY}
            r={INNER_R + 2}
            fill="none"
            stroke={active ? active.color : "rgba(0,0,0,0.08)"}
            strokeWidth="1.5"
            style={{ transition: "stroke 0.3s ease" }}
          /></svg>

        {/* Center circle — always circular */}
        <div
          className="absolute rounded-full overflow-hidden flex items-center justify-center"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: centerPct,
            height: centerPct,
            background: "#ffffff",
            border: `2px solid ${active ? active.color + "70" : "rgba(0,0,0,0.08)"}`,
            transition: "border-color 0.3s ease",
            zIndex: 5,
          }}
        >
          {active ? (
            /* SDG identity — number, name, description */
            <div
              className="flex flex-col items-center justify-center text-center"
              style={{ padding: "16px" }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(36px, 9%, 58px)",
                  fontWeight: 900,
                  color: active.color,
                  lineHeight: 1,
                }}
              >
                {String(active.id).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(13px, 3.5%, 20px)",
                  fontWeight: 800,
                  color: "#1a2332",
                  lineHeight: 1.15,
                  marginTop: "4px",
                  maxWidth: "80%",
                }}
              >
                {active.title.toUpperCase()}
              </div>
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  background: active.color,
                  borderRadius: "2px",
                  margin: "8px auto",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  fontSize: "clamp(8px, 2%, 11px)",
                  color: "rgba(30,40,55,0.65)",
                  lineHeight: 1.5,
                  maxWidth: "78%",
                }}
              >
                {active.description}
              </div>
            </div>
          ) : (
            /* Default — Conway logo */
            <div className="flex flex-col items-center justify-center gap-2 text-center px-4">
              <ImageWithFallback
                src={conwayLogo}
                alt="Conway — great people : great work"
                className="w-4/5 object-contain"
              />
              <div style={{ fontSize: "clamp(5px, 1.3vw, 8px)", color: "rgba(30,40,55,0.35)" }}>
                hover any sector to explore
              </div>
            </div>
          )}
        </div>

        {/* External detail panel — bursts out from the hovered sector */}
        {active && panelAnchor && (
          <div
            style={{
              position: "absolute",
              left: panelAnchor.left,
              top: panelAnchor.top,
              transform: panelAnchor.transform,
              width: "230px",
              background: active.color,
              borderRadius: "12px",
              boxShadow: `0 6px 28px ${active.color}55, 0 2px 8px rgba(0,0,0,0.15)`,
              zIndex: 20,
              overflow: "hidden",
            }}
          >
            {/* Panel header */}
            <div
              style={{
                background: "rgba(0,0,0,0.18)",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "18px", lineHeight: 1 }}>{active.emoji}</span>
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.65)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  SDG {String(active.id).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "14px",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.2,
                  }}
                >
                  {active.title}
                </div>
              </div>
            </div>

            {/* Bullet points */}
            <ul style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: "6px" }}>
              {active.points.filter(Boolean).map((p, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "6px",
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: "6px",
                    padding: "6px 8px",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "10px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ▸
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.92)",
                      fontSize: "11px",
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Legend grid */}
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-2.5 w-full" style={{ maxWidth: "min(760px, 85vw)" }}>
        {SDGS.map((sdg) => (
          <button
            key={sdg.id}
            className="flex items-center gap-2 text-left group"
            onMouseEnter={() => setActiveId(sdg.id)}
            onMouseLeave={() => setActiveId(null)}
            onClick={() => setActiveId(activeId === sdg.id ? null : sdg.id)}
          >
            <div
              className="w-2.5 h-2.5 rounded-sm flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
              style={{
                background: sdg.color,
                opacity: activeId === null || activeId === sdg.id ? 1 : 0.3,
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
            />
            <span
              className="text-xs leading-tight transition-colors duration-200"
              style={{
                fontFamily: "'Barlow', sans-serif",
                color: activeId === sdg.id ? sdg.color : "rgba(30,40,55,0.55)",
              }}
            >
              {sdg.id}. {sdg.title}
            </span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-muted-foreground" style={{ fontSize: "11px" }}>
        <p>Data sourced from the United Nations Department of Economic and Social Affairs</p>
        <p className="mt-1 opacity-50">sdgs.un.org · 2030 Agenda for Sustainable Development</p>
      </footer>
    </div>
  );
}
