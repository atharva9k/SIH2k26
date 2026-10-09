GeM BidVerify AI

AI-powered technical compliance and bid evaluation platform for government procurement workflows.

GeM BidVerify AI is a procurement intelligence prototype designed to help procurement officers evaluate vendor bids against tender requirements using automated document processing, compliance rules, risk detection, and human-in-the-loop verification.

The platform allows officers to create and manage tenders, register bidders, submit bid documents, run AI-assisted compliance checks, review verification evidence, identify high-risk or non-compliant bids, and make the final procurement decision with an auditable evaluation trail.

What it does

The platform transforms the traditional manual bid-verification workflow into a structured digital process:

Tender → Bidder → Documents → AI Extraction → Compliance Verification → Risk Assessment → Officer Review → Decision → Audit Trail

Key Features

- Tender Management
  
  - Create and manage procurement tenders
  - Define mandatory and optional technical/compliance requirements
  - Track tender deadlines and registered bids

- Bid & Bidder Management
  
  - Register vendor information including PAN, GSTIN, CIN and MSME/Startup details
  - Associate bidders with active tenders
  - Track bid verification status

- AI-Assisted Document Processing
  
  - Upload PDF and image-based bid documents
  - OCR-based document processing workflow
  - Classify documents such as PAN, GST, ITR/financial documents, OEM authorization, Make-in-India declarations and debarment affidavits
  - Extract structured information from documents with confidence scores

- Technical Compliance Engine
  
  - Evaluate individual tender requirements
  - Assign compliance points
  - Record verification status and supporting evidence
  - Apply configurable rules to determine whether requirements are satisfied

- Risk Detection
  
  - Identify missing mandatory documents
  - Detect entity/name mismatches
  - Flag potentially debarred vendors
  - Categorize bids into Low, Medium, High and Critical risk levels

- Human-in-the-Loop Evaluation
  
  - AI provides an initial evaluation
  - Procurement officers can inspect the evidence and reasoning
  - Officers can adjust points, verification status and explanations
  - Final decisions remain under human control

- Compliance Dashboard
  
  - Total and active tenders
  - Bids under verification
  - Verified and high-risk bids
  - Compliance distribution
  - Risk distribution
  - Recent bid activity

- Audit & Accountability
  
  - Records AI evaluations, officer actions and bid decisions
  - Provides an audit trail for verification activity
  - Supports searching and reviewing recorded evaluation events

- Verification Integrations Interface
  
  - Designed around external verification sources such as GST, PAN, corporate, MSME and debarment registries
  - Includes dedicated verification workflows for testing registry checks

Example Compliance Checks

The prototype models checks around:

- PAN verification
- GST registration
- MSME / Udyam registration
- ITR and CA turnover verification
- OEM / Manufacturer Authorization
- Make-in-India declarations
- Debarment / blacklisting checks

Each requirement can have a verification source, minimum condition, mandatory status and evaluation weight.

Architecture

The application is structured around several major layers:

Procurement Management
→ Tenders, bidders and bids

Document Intelligence
→ Upload → OCR → Classification → Entity/Field Extraction

Compliance Engine
→ Requirement Matching → Rule Evaluation → Evidence Verification → Scoring

Risk Engine
→ Missing requirements → Mismatches → Debarment signals → Risk classification

Human Review
→ Officer verification → Score adjustment → Final decision

Audit Layer
→ Evaluation events → Officer actions → Decision history

Technology

The current implementation is a frontend-heavy web prototype using:

- React
- React Router
- Tailwind CSS
- Recharts
- Lucide-style icon components
- JavaScript
- REST-style API service abstraction
- Browser localStorage for demo/fallback persistence

The application is designed so the frontend can communicate with backend API endpoints while also providing local demo data when the backend is unavailable.

Important Note

This repository is a prototype / demonstration implementation of an AI-assisted procurement compliance workflow. References to government registries and procurement rules represent the intended verification architecture and simulated/demo integrations in the current implementation. It should not be interpreted as an officially connected Government e-Marketplace (GeM) system or as a production government verification service.

Vision

The goal of GeM BidVerify AI is to reduce repetitive manual verification work, surface compliance issues earlier, improve consistency in technical bid evaluation, and give procurement officers a transparent evidence-based workflow while keeping the final decision under human control.
