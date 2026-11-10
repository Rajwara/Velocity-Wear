/** Checkout rules shared by the cart/checkout pages and the /api/orders endpoint. */

export type ShippingOption = {
  id: "standard" | "express";
  label: string;
  detail: string;
  price: number;
};

export const SHIPPING_OPTIONS: ShippingOption[] = [
  { id: "standard", label: "Standard delivery", detail: "3–5 working days", price: 0 },
  { id: "express", label: "Express delivery", detail: "1–2 working days", price: 14.99 },
];

export type PaymentMethod = {
  id: "cod" | "card" | "paypal";
  label: string;
  detail: string;
  /** false = shown as "coming soon" and cannot be selected */
  enabled: boolean;
};

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "cod",
    label: "Cash on delivery",
    detail: "Pay in cash when your order arrives",
    enabled: true,
  },
  { id: "card", label: "Credit or debit card", detail: "Visa, Mastercard, Amex", enabled: false },
  { id: "paypal", label: "PayPal", detail: "Pay with your PayPal account", enabled: false },
];

export const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Ireland",
  "Germany",
  "France",
  "Netherlands",
  "United Arab Emirates",
  "Pakistan",
  "India",
  "Other",
];

export type CustomerField =
  | "email"
  | "phone"
  | "firstName"
  | "lastName"
  | "address"
  | "apartment"
  | "city"
  | "region"
  | "postcode"
  | "country";

export type CustomerDetails = Record<CustomerField, string>;

/** Phone is required so the courier can call before delivering a cash-on-delivery order. */
export const REQUIRED_FIELDS: CustomerField[] = [
  "email",
  "phone",
  "firstName",
  "lastName",
  "address",
  "city",
  "postcode",
  "country",
];

export function validateCustomer(values: CustomerDetails) {
  const errors: Partial<Record<CustomerField, string>> = {};
  for (const f of REQUIRED_FIELDS) {
    if (!String(values[f] ?? "").trim()) errors[f] = "This field is required";
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address";
  }
  if (values.phone && !/^[+()\d\s-]{6,20}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number";
  }
  for (const [k, v] of Object.entries(values)) {
    if (String(v ?? "").length > 200) errors[k as CustomerField] = "This is too long";
  }
  return errors;
}

/** What the checkout page sends to POST /api/orders. Prices are always recalculated on the server. */
export type OrderRequest = {
  customer: CustomerDetails;
  shipping: ShippingOption["id"];
  payment: PaymentMethod["id"];
  items: { slug: string; quantity: number }[];
};

/** What POST /api/orders returns on success. */
export type OrderResponse = {
  orderNumber: string;
  items: { slug: string; name: string; image: string; quantity: number; lineTotal: number }[];
  subtotal: number;
  shipping: { label: string; price: number };
  total: number;
  payment: string;
  email: string;
  firstName: string;
};
