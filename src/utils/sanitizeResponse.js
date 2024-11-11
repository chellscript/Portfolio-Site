/* eslint-disable @typescript-eslint/no-explicit-any */
import DOMPurify from "isomorphic-dompurify";

// added to allow links to open externally
DOMPurify.addHook("afterSanitizeAttributes", function (node) {
  if ("target" in node) {
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener");
  }
});

// Function to sanitize an object or string
function sanitizeResponse(data) {
  if (data == null) {
    return data;
  }

  // Handle string input
  if (typeof data === "string") {
    return DOMPurify.sanitize(data.trim());
  }

  // Handle arrays by sanitizing each item
  if (Array.isArray(data)) {
    return data.map((item) => sanitizeResponse(item));
  }

  // Handle objects by sanitizing each property
  if (typeof data === "object") {
    const sanitizedObj = {};

    Object.entries(data).forEach(([key, value]) => {
      if (value != null) {
        // For strings, sanitize directly
        if (typeof value === "string") {
          sanitizedObj[key] = DOMPurify.sanitize(value.trim());
        }
        // For arrays or nested objects, recurse
        else if (Array.isArray(value) || typeof value === "object") {
          sanitizedObj[key] = sanitizeResponse(value);
        }
        // For other primitive types, keep as is
        else {
          sanitizedObj[key] = value;
        }
      }
    });

    return sanitizedObj;
  }

  return data;
}

export default sanitizeResponse;
