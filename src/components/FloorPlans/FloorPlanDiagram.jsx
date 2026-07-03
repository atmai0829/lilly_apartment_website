import "./FloorPlanDiagram.css";

// ── Design tokens ─────────────────────────────────────────
const C = {
  wall: "#2e2a26",
  floor: "#faf8f5",
  balcony: "#d5e8d4",
  balcTxt: "#2a5a38",
  bedroom: "#f4efe8",
  bedrTxt: "#3d3530",
  bedroom2: "#ede8f4",
  bedr2Txt: "#3a2a5a",
  bath: "#daedf0",
  bathTxt: "#2a5a60",
  kitchen: "#f2eedd",
  kitchTxt: "#5a4a20",
  living: "#ede8f4",
  livTxt: "#3a2a5a",
  entry: "#e8e4de",
  entryTxt: "#5a5048",
  furn: "#8B7355",
  furnDark: "#6b5840",
  furnLight: "#c8b898",
  appliance: "#90a8ba",
  fridge: "#90b0ba",
  fixture: "#b5d0d8",
  fixtStr: "#6a9aa0",
  cityBar: "#3a6a8a",
  beachBar: "#3a7a68",
};

const W = 260;
const H = 370;

// ── Primitives ────────────────────────────────────────────
const HWall = ({ y, x1 = 0, x2 = W }) => (
  <rect x={x1} y={y} width={x2 - x1} height={5} fill={C.wall} />
);
const VWall = ({ x, y1, y2 }) => (
  <rect x={x} y={y1} width={5} height={y2 - y1} fill={C.wall} />
);
const OuterBorder = () => (
  <rect
    x={0}
    y={0}
    width={W}
    height={H}
    fill="none"
    stroke={C.wall}
    strokeWidth={7}
  />
);

// ── Furniture ─────────────────────────────────────────────
function Bed({ x, y, w, h, label }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={C.furn} rx={3} />
      <rect
        x={x}
        y={y}
        width={w}
        height={Math.round(h * 0.22)}
        fill={C.furnDark}
        rx={3}
      />
      <text
        x={x + w / 2}
        y={y + h * 0.66}
        textAnchor="middle"
        fontSize={8.5}
        fill="white"
        fontWeight="600"
      >
        {label}
      </text>
    </g>
  );
}

function Closet({ x, y, w, h }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={C.furnLight}
        stroke={C.furn}
        strokeWidth={1.5}
        rx={2}
      />
      <line
        x1={x + w / 2}
        y1={y}
        x2={x + w / 2}
        y2={y + h}
        stroke={C.furn}
        strokeWidth={1}
        strokeDasharray="3,2"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fontSize={8}
        fill={C.bedrTxt}
        fontWeight="600"
      >
        Closet
      </text>
    </g>
  );
}

function Couch({ x, y, w, h, label }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={C.furn} rx={5} />
      <rect x={x} y={y + h - 9} width={w} height={9} fill={C.furnDark} rx={4} />
      {label && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 3}
          textAnchor="middle"
          fontSize={8}
          fill="white"
        >
          {label}
        </text>
      )}
    </g>
  );
}

// ── Room blocks ───────────────────────────────────────────
function Bath({ x, y, w, h }) {
  const compact = h < 80;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={C.bath} />
      <text
        x={x + w / 2}
        y={y + (compact ? 12 : 14)}
        textAnchor="middle"
        fontSize={9}
        fill={C.bathTxt}
        fontWeight="700"
      >
        BATHROOM
      </text>
      {/* Toilet */}
      <rect
        x={x + 8}
        y={y + (compact ? 18 : 22)}
        width={24}
        height={compact ? 30 : 36}
        fill={C.fixture}
        rx={4}
      />
      <ellipse
        cx={x + 20}
        cy={y + (compact ? 43 : 53)}
        rx={9}
        ry={5.5}
        fill="#9ec0c8"
      />
      {/* Shower */}
      <rect
        x={x + w - 56}
        y={y + (compact ? 14 : 18)}
        width={50}
        height={compact ? 44 : 50}
        fill={C.fixture}
        stroke={C.fixtStr}
        strokeWidth={1}
        strokeDasharray="3,2"
        rx={3}
      />
      <text
        x={x + w - 31}
        y={y + (compact ? 38 : 45)}
        textAnchor="middle"
        fontSize={8}
        fill={C.bathTxt}
      >
        Shower
      </text>
    </g>
  );
}

function Kitchen({ x, y, w, h }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={C.kitchen} />
      <text
        x={x + w / 2}
        y={y + 14}
        textAnchor="middle"
        fontSize={9}
        fill={C.kitchTxt}
        fontWeight="700"
      >
        KITCHEN
      </text>
      {/* Counter */}
      <rect
        x={x + 8}
        y={y + 22}
        width={Math.min(62, w - 75)}
        height={17}
        fill="#c8b878"
        rx={2}
      />
      {/* Fridge */}
      <rect
        x={x + w - 55}
        y={y + 20}
        width={23}
        height={24}
        fill={C.fridge}
        rx={2}
      />
      <text
        x={x + w - 43}
        y={y + 35}
        textAnchor="middle"
        fontSize={6.5}
        fill="white"
      >
        fridge
      </text>
      {/* Washer/Dryer */}
      <rect
        x={x + w - 28}
        y={y + 20}
        width={21}
        height={24}
        fill={C.appliance}
        rx={2}
      />
      <text
        x={x + w - 17}
        y={y + 35}
        textAnchor="middle"
        fontSize={6.5}
        fill="white"
      >
        W/D
      </text>
      {/* TV */}
      <rect
        x={x + 8}
        y={y + h - 14}
        width={w - 16}
        height={8}
        fill="#3a3a3a"
        rx={1}
      />
      <text
        x={x + w / 2}
        y={y + h - 2}
        textAnchor="middle"
        fontSize={7.5}
        fill={C.kitchTxt}
      >
        TV
      </text>
    </g>
  );
}

function Entry({ x, y, w, h, doorRight = true }) {
  const dx = doorRight ? x + w - 45 : x + 22;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={C.entry} />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fontSize={9}
        fill={C.entryTxt}
      >
        ENTRY
      </text>
      {/* Door swing */}
      <line
        x1={dx}
        y1={y + h}
        x2={dx}
        y2={y + h - 22}
        stroke={C.wall}
        strokeWidth={2.5}
      />
      <path
        d={`M ${dx} ${y + h} A 22 22 0 0 ${doorRight ? 1 : 0} ${dx + (doorRight ? 22 : -22)} ${y + h - 22}`}
        stroke={C.furn}
        strokeWidth={1.5}
        fill="none"
      />
    </g>
  );
}

function Banner({ y, label, color, arrowUp }) {
  return (
    <g>
      <rect x={0} y={y} width={W} height={16} fill={color} />
      <text
        x={W / 2}
        y={y + 11}
        textAnchor="middle"
        fontSize={8}
        fill="white"
        fontWeight="700"
        letterSpacing="1.5"
      >
        {arrowUp ? `▲  ${label}  ▲` : `▼  ${label}  ▼`}
      </text>
    </g>
  );
}

// ── PLAN A — 1 BR · Queen Bed · Wide Balcony · City View ──
export function PlanASVG() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="fp-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={W} height={H} fill={C.floor} />

      <Banner y={0} label="CITY VIEW" color={C.cityBar} arrowUp />

      {/* Wide Balcony  y:16–68 */}
      <rect x={4} y={16} width={252} height={52} fill={C.balcony} />
      <text
        x={W / 2}
        y={46}
        textAnchor="middle"
        fontSize={11}
        fill={C.balcTxt}
        fontWeight="700"
      >
        WIDE BALCONY
      </text>

      <HWall y={68} />

      {/* Bedroom  y:73–232  h=159 */}
      <rect x={4} y={73} width={252} height={159} fill={C.bedroom} />
      <text x={18} y={89} fontSize={10} fill={C.bedrTxt} fontWeight="700">
        BEDROOM
      </text>
      <Bed x={55} y={104} w={118} h={87} label="Queen Bed" />
      <Closet x={192} y={98} w={58} h={62} />

      <HWall y={232} />
      <VWall x={120} y1={232} y2={332} />

      {/* Bathroom  y:237–332  w=116 */}
      <Bath x={4} y={237} w={116} h={95} />

      {/* Kitchen   y:237–332  w=131 */}
      <Kitchen x={125} y={237} w={131} h={95} />

      <HWall y={332} />

      {/* Entry  y:337–366 */}
      <Entry x={4} y={337} w={252} h={29} doorRight />

      <OuterBorder />
    </svg>
  );
}

// ── PLAN B — 1 BR · Full Bed · Large Couch · Small Balcony · Beach View ──
export function PlanBSVG() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="fp-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={W} height={H} fill={C.floor} />

      {/* Entry  y:4–30 */}
      <Entry x={4} y={4} w={252} h={26} doorRight={false} />
      <HWall y={30} />

      {/* Kitchen  y:35–125  h=90 */}
      <Kitchen x={4} y={35} w={252} h={90} />
      <HWall y={125} />

      {/* Bedroom  y:130–278  h=148 */}
      <rect x={4} y={130} width={252} height={148} fill={C.bedroom} />
      <text x={18} y={146} fontSize={10} fill={C.bedrTxt} fontWeight="700">
        BEDROOM
      </text>
      <Bed x={55} y={158} w={108} h={78} label="Full Bed" />
      <Closet x={190} y={152} w={58} h={62} />

      <HWall y={278} />
      <VWall x={120} y1={278} y2={343} />

      {/* Bathroom  y:283–343  h=60  w=116 */}
      <Bath x={4} y={283} w={116} h={60} />

      {/* Living — large couch  y:283–343  w=131 */}
      <rect x={125} y={283} width={131} height={60} fill={C.living} />
      <text
        x={190}
        y={297}
        textAnchor="middle"
        fontSize={9}
        fill={C.livTxt}
        fontWeight="700"
      >
        LIVING
      </text>
      <Couch x={132} y={307} w={115} h={28} label="Large Couch" />

      <HWall y={343} />

      {/* Small balcony strip  y:348–354 */}
      <rect x={4} y={348} width={252} height={6} fill={C.balcony} />
      <text
        x={W / 2}
        y={353}
        textAnchor="middle"
        fontSize={7}
        fill={C.balcTxt}
        fontWeight="600"
      >
        SMALL BALCONY
      </text>

      <Banner y={354} label="BEACH VIEW" color={C.beachBar} arrowUp={false} />
      <OuterBorder />
    </svg>
  );
}

// ── PLAN C — 2 BR · Full + Twin Beds · Beach View ──
export function PlanCSVG() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="fp-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={W} height={H} fill={C.floor} />

      {/* Entry  y:4–30 */}
      <Entry x={4} y={4} w={252} h={26} doorRight={false} />
      <HWall y={30} />

      {/* Kitchen  y:35–122  h=87 */}
      <Kitchen x={4} y={35} w={252} h={87} />
      <HWall y={122} />

      {/* Two bedrooms side-by-side  y:127–275  h=148 */}
      <VWall x={128} y1={122} y2={280} />

      {/* Bedroom 1 — Full Bed  left */}
      <rect x={4} y={127} width={124} height={148} fill={C.bedroom} />
      <text
        x={66}
        y={143}
        textAnchor="middle"
        fontSize={9.5}
        fill={C.bedrTxt}
        fontWeight="700"
      >
        BEDROOM 1
      </text>
      <Bed x={16} y={156} w={96} h={76} label="Full Bed" />
      <Closet x={16} y={244} w={70} h={28} />

      {/* Bedroom 2 — Twin Bed  right */}
      <rect x={133} y={127} width={123} height={148} fill={C.bedroom2} />
      <text
        x={194}
        y={143}
        textAnchor="middle"
        fontSize={9.5}
        fill={C.bedr2Txt}
        fontWeight="700"
      >
        BEDROOM 2
      </text>
      <Bed x={144} y={156} w={88} h={65} label="Twin Bed" />
      <Closet x={148} y={238} w={64} h={34} />

      <HWall y={275} />

      {/* Bathroom  y:280–345  h=65  full width */}
      <Bath x={4} y={280} w={252} h={65} />

      <HWall y={345} />

      {/* Beach-facing strip */}
      <rect x={4} y={350} width={252} height={4} fill={C.balcony} />

      <Banner y={354} label="BEACH VIEW" color={C.beachBar} arrowUp={false} />
      <OuterBorder />
    </svg>
  );
}

// ── PLAN D — 1 BR · Full Bed · 2 Couches · Small Balcony · Beach View ──
export function PlanDSVG() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="fp-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={W} height={H} fill={C.floor} />

      {/* Entry  y:4–30 */}
      <Entry x={4} y={4} w={252} h={26} doorRight={false} />
      <HWall y={30} />

      {/* Kitchen  y:35–125  h=90 */}
      <Kitchen x={4} y={35} w={252} h={90} />
      <HWall y={125} />

      {/* Bedroom (left) + Living — 2 couches (right)  y:130–278  h=148 */}
      <VWall x={138} y1={125} y2={278} />

      {/* Bedroom */}
      <rect x={4} y={130} width={134} height={148} fill={C.bedroom} />
      <text
        x={71}
        y={146}
        textAnchor="middle"
        fontSize={9.5}
        fill={C.bedrTxt}
        fontWeight="700"
      >
        BEDROOM
      </text>
      <Bed x={14} y={158} w={104} h={76} label="Full Bed" />
      <Closet x={14} y={246} w={80} h={28} />

      {/* Living — 2 couches */}
      <rect x={143} y={130} width={113} height={148} fill={C.living} />
      <text
        x={199}
        y={146}
        textAnchor="middle"
        fontSize={9.5}
        fill={C.livTxt}
        fontWeight="700"
      >
        LIVING
      </text>
      <Couch x={149} y={162} w={100} h={28} label="Couch 1" />
      <Couch x={149} y={200} w={100} h={28} label="Couch 2" />

      <HWall y={278} />

      {/* Bathroom  y:283–345  h=62  full width */}
      <Bath x={4} y={283} w={252} h={62} />

      <HWall y={345} />

      {/* Small balcony strip */}
      <rect x={4} y={350} width={252} height={4} fill={C.balcony} />
      <text
        x={W / 2}
        y={356}
        textAnchor="middle"
        fontSize={7}
        fill={C.balcTxt}
        fontWeight="600"
      >
        SMALL BALCONY
      </text>

      <Banner y={354} label="BEACH VIEW" color={C.beachBar} arrowUp={false} />
      <OuterBorder />
    </svg>
  );
}
