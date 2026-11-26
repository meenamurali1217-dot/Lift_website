import { addQuote, getQuotes } from '../data/store.js';

// Indian Mobile Number validation (allows 10 digits or +91 prefix)
const validateIndianPhone = (phone) => {
  if (!phone) return false;
  const cleanPhone = phone.replace(/[\s-]/g, '');
  const indianPhoneRegex = /^(\+91|91|0)?[6789]\d{9}$/;
  return indianPhoneRegex.test(cleanPhone);
};

// Email validation
const validateEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const handleCreateQuote = async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      projectLocation,
      buildingType,
      elevatorType,
      floors,
      units,
      projectDescription
    } = req.body;

    const errors = [];

    if (!fullName || fullName.trim().length < 2) {
      errors.push('Full name is required (minimum 2 characters).');
    }

    if (!email || !validateEmail(email.trim())) {
      errors.push('A valid email address is required.');
    }

    if (!phone || !validateIndianPhone(phone.trim())) {
      errors.push('A valid Indian mobile number (e.g. 9820154321 or +91 98201 54321) is required.');
    }

    if (!projectLocation || projectLocation.trim().length < 2) {
      errors.push('Project location is required.');
    }

    if (!buildingType) {
      errors.push('Please select a building type.');
    }

    if (!elevatorType) {
      errors.push('Please select an elevator type.');
    }

    const parsedFloors = parseInt(floors, 10);
    if (isNaN(parsedFloors) || parsedFloors < 1) {
      errors.push('Number of floors must be at least 1.');
    }

    const parsedUnits = parseInt(units, 10);
    if (isNaN(parsedUnits) || parsedUnits < 1) {
      errors.push('Number of elevator units must be at least 1.');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    const record = addQuote({
      fullName: fullName.trim(),
      companyName: (companyName || '').trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      projectLocation: projectLocation.trim(),
      buildingType,
      elevatorType,
      floors: parsedFloors,
      units: parsedUnits,
      projectDescription: (projectDescription || '').trim()
    });

    return res.status(201).json({
      success: true,
      message: 'Quotation request submitted successfully. Our engineering team will contact you within 24 hours.',
      data: {
        ticketId: record.id,
        fullName: record.fullName,
        elevatorType: record.elevatorType,
        units: record.units,
        createdAt: record.createdAt
      }
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing your quotation request. Please try again or call our hotline.'
    });
  }
};

export const handleGetQuotes = async (req, res) => {
  try {
    const quotes = getQuotes();
    return res.status(200).json({
      success: true,
      count: quotes.length,
      data: quotes
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve quotes'
    });
  }
};
