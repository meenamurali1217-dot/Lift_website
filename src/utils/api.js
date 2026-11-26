/**
 * API utility for BlueStar Lifts Frontend
 */

const API_BASE_URL = ''; // Proxied via Vite to http://localhost:5000 in dev, or same host in prod

export async function submitQuoteRequest(payload) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || (data.errors ? data.errors.join(', ') : 'Failed to submit quote request.'));
    }
    return data;
  } catch (error) {
    console.error('API Error (submitQuoteRequest):', error);
    throw error;
  }
}

export async function submitContactRequest(payload) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || (data.errors ? data.errors.join(', ') : 'Failed to submit contact message.'));
    }
    return data;
  } catch (error) {
    console.error('API Error (submitContactRequest):', error);
    throw error;
  }
}
