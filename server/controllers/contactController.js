import { addContact, getContacts } from '../data/store.js';

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

export const handleCreateContact = async (req, res) => {
  try {
    const { fullName, email, phone, companyName, subject, message } = req.body;
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

    if (!subject || subject.trim().length < 3) {
      errors.push('Please select or specify a subject for your inquiry.');
    }

    if (!message || message.trim().length < 10) {
      errors.push('Please provide a message with at least 10 characters.');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    const record = addContact({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      companyName: (companyName || '').trim(),
      subject: subject.trim(),
      message: message.trim()
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out. Your message has been received and our team will get in touch shortly.',
      data: {
        inquiryId: record.id,
        fullName: record.fullName,
        subject: record.subject,
        createdAt: record.createdAt
      }
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit contact inquiry. Please try again or call our 24/7 helpline.'
    });
  }
};

export const handleGetContacts = async (req, res) => {
  try {
    const contacts = getContacts();
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve inquiries'
    });
  }
};
