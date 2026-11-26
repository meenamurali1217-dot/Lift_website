# BlueStar Lifts – Premium Elevator Solutions Corporate Website

A complete, modern, corporate elevator solutions web platform engineered for **BlueStar Lifts** following the reference design with dark navy (`#061B32`, `#031426`) and electric blue (`#0799E8`) visual identity.

---

## 🌟 Key Highlights & Features

- **10 Complete Pages**:
  1. **Home (`/`)**: Dark navy hero with headline *"Moving You Towards a Better Future"*, floating feature strip, 4 highlight solution cards, why choose section with 5 advantages, landmark projects showcase, auto-sliding client testimonial slider, CTA banner, and 4-column footer.
  2. **About Us (`/about`)**: Company overview, foundation story, mission & vision, core values, technical engineering capabilities, key statistics, and leadership team profiles.
  3. **Products (`/products`)**: Dynamic category filter tabs (*Passenger, Goods, Hospital, Panoramic, Home, Industrial*), search input, and high-fidelity specifications.
  4. **Product Details (`/products/:id`)**: Dynamic route rendering detailed technical matrix, safety systems, available finishes, applications, and fast-inquiry pre-filled form.
  5. **Industries (`/industries`)**: 7 comprehensive vertical sections (Residential, Commercial, Healthcare, Shopping Malls, Hotels, Industrial, Education) with recommended elevator models.
  6. **Our Projects (`/projects`)**: Filterable project gallery with category & Indian city filters (Mumbai, Bengaluru, Delhi NCR, Hyderabad, Pune, Goa), specs summary, and interactive Project Details Modal.
  7. **Services (`/services`)**: Turnkey Installation, Preventive Maintenance, 24/7 Breakdown Dispatch, Modernization, AMC Contracts, Safety Audits, plus an **Interactive AMC Cost Estimator**.
  8. **Safety & Quality (`/safety-quality`)**: 8-point safety architecture, zero-compromise charter, 6-stage QA pipeline, and Bureau of Indian Standards (IS 14665 & NBC 2016) conformance.
  9. **Contact Us (`/contact`)**: Indian corporate headquarters (BKC, Mumbai), regional branches, contact lines, embedded Google Maps, and validated message form.
  10. **Request a Quote (`/request-quote`)**: Smart quotation wizard with Indian mobile validation, floors/units selector, ticket ID generation (`BSL-QT-XXXXXX`), database persistence, and confetti feedback.

---

## 🎨 Design System & Palette

- **Primary Navy:** `#061B32`
- **Dark Navy:** `#031426`
- **Primary Electric Blue:** `#0799E8`
- **Light Blue Accent:** `#EAF6FD`
- **Light Background:** `#F5F8FC`
- **Text Dark:** `#15283B`
- **Secondary Text:** `#667789`
- **Typography:** Plus Jakarta Sans & Inter
- **Aesthetic:** Clean glassmorphism (`backdrop-blur`), subtle neon blue glow, rounded corners (`rounded-3xl`), and curated architectural elevator imagery.

---

## 🚀 Running the Project

### Prerequisites
- Node.js (v18+)
- npm

### 1. Development Mode (Both Frontend + Backend)
Run concurrently with one command:
```bash
npm run start
```
- **Frontend (Vite):** http://localhost:3000
- **Backend API (Express):** http://localhost:5000
- **API Health Check:** http://localhost:5000/api/health

### 2. Standalone Frontend (Vite Dev Server)
```bash
npm run dev
```

### 3. Standalone Backend Server
```bash
npm run server
```

### 4. Production Build & Execution
```bash
npm run build
npm run server
```
The Express server on port 5000 will serve both the production static frontend build and the API routes!

---

## 🛠️ Backend API Endpoints

- `GET /api/health`: Health status and server uptime
- `POST /api/quote`: Validates and logs quotation requests into `server/database/submissions.json`
- `GET /api/quote`: Retrieves all submitted quotation requests
- `POST /api/contact`: Validates and logs contact inquiries
- `GET /api/contact`: Retrieves all contact inquiries

---

## 📁 Project Structure

```
Lift_website/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── server/
│   ├── server.js
│   ├── data/
│   │   └── store.js
│   ├── controllers/
│   │   ├── quoteController.js
│   │   └── contactController.js
│   ├── routes/
│   │   ├── quoteRoutes.js
│   │   └── contactRoutes.js
│   └── database/
│       └── submissions.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── layouts/
    │   └── MainLayout.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── FeatureStrip.jsx
    │   ├── ProductCard.jsx
    │   ├── ProjectCard.jsx
    │   ├── TestimonialSlider.jsx
    │   ├── VideoModal.jsx
    │   ├── ProjectDetailModal.jsx
    │   ├── AmcCalculator.jsx
    │   ├── CTASection.jsx
    │   └── ScrollToTop.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Products.jsx
    │   ├── ProductDetails.jsx
    │   ├── Industries.jsx
    │   ├── Projects.jsx
    │   ├── Services.jsx
    │   ├── SafetyQuality.jsx
    │   ├── Contact.jsx
    │   └── RequestQuote.jsx
    ├── data/
    │   ├── products.js
    │   ├── projects.js
    │   ├── testimonials.js
    │   ├── services.js
    │   └── team.js
    └── utils/
        └── api.js
```
