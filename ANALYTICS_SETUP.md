# Google Analytics Setup Guide for JBrasil Labs

## Overview
This guide explains how to set up Google Analytics tracking for the JBrasil Labs website. The site includes comprehensive event tracking for user behavior, conversions, and engagement metrics.

## Setup Steps

### 1. Create a Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Start measuring" or create a new property
4. Fill in the property details:
   - Property name: "JBrasil Labs"
   - Reporting timezone: "America/Sao_Paulo" (or your timezone)
   - Currency: "BRL"

### 2. Get Your Measurement ID
1. After creating the property, go to Admin > Data Streams
2. Click on your web stream
3. Copy the "Measurement ID" (format: G-XXXXXXXXXX)

### 3. Update the Website
1. Open `client/index.html`
2. Find the Google Analytics script section
3. Replace both instances of `G-XXXXXXXXXX` with your actual Measurement ID
4. Example:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF45"></script>
   ```

### 4. Deploy and Verify
1. Deploy the website to your hosting platform (Render, Vercel, etc.)
2. Visit your website
3. Go to Google Analytics > Real-time > Overview
4. You should see live traffic data

## Tracked Events

The website automatically tracks the following events:

### Conversion Events
- **cta_click**: When users click on CTA buttons (COMEÇAR, SOLICITAR ORÇAMENTO, VAMOS CONVERSAR)
- **whatsapp_widget_open**: When users open the WhatsApp chat widget
- **whatsapp_message_sent**: When users send a message via WhatsApp

### Engagement Events
- **page_load_time**: Time taken for the page to load (in milliseconds)
- **scroll_depth**: User scroll depth (tracked at 25%, 50%, 75%)
- **language_changed**: When users change the language (PT, EN, ES)
- **sitemap_menu_open**: When users open the sitemap menu
- **section_viewed**: When users scroll to different sections
- **link_click**: When users click on links

## Event Data Structure

Each event includes:
- **Event name**: The name of the action
- **Event parameters**: Additional data about the action
- **Timestamp**: When the event occurred

Example event data:
```json
{
  "event_name": "cta_click",
  "event_params": {
    "cta_text": "COMEÇAR",
    "timestamp": "2026-04-23T22:30:00.000Z"
  }
}
```

## Creating Custom Reports

### 1. Conversion Funnel Report
1. Go to Reports > Engagement > Events
2. Select "cta_click" event
3. Add a secondary dimension: "Event parameter" > "cta_text"
4. This shows which CTAs are most clicked

### 2. WhatsApp Widget Performance
1. Go to Reports > Engagement > Events
2. Filter for "whatsapp_widget_open" and "whatsapp_message_sent"
3. Track conversion rate from widget opens to messages sent

### 3. Scroll Depth Analysis
1. Go to Reports > Engagement > Events
2. Select "scroll_depth" event
3. Analyze user engagement by scroll percentage

### 4. Page Load Performance
1. Go to Reports > Engagement > Events
2. Select "page_load_time" event
3. Monitor average load time and identify performance issues

## Setting Up Conversion Goals

### Goal 1: WhatsApp Inquiry
1. Go to Admin > Conversions > New conversion event
2. Event name: "whatsapp_message_sent"
3. Description: "User sent a message via WhatsApp widget"
4. Mark as conversion: Yes

### Goal 2: CTA Clicks
1. Create new conversion event
2. Event name: "cta_click"
3. Description: "User clicked on a call-to-action button"
4. Mark as conversion: Yes

## Viewing Reports

### Real-time Dashboard
- Shows live users on the site
- Recent events and user actions
- Location and device information

### Engagement Reports
- Event counts and user interactions
- Scroll depth distribution
- Language preferences

### Conversion Reports
- Conversion rate by event type
- User journey to conversion
- Traffic source performance

## Troubleshooting

### Events Not Showing
1. Verify the Measurement ID is correct in `index.html`
2. Check browser console for JavaScript errors
3. Wait 24-48 hours for data to fully process
4. Use Google Analytics Debugger extension to verify events

### Low Traffic
1. Ensure the website is publicly accessible
2. Check that Google Analytics script is loading
3. Verify there are no ad blockers interfering
4. Check Real-time reports first (data takes time to process)

## Best Practices

1. **Regular Monitoring**: Check analytics weekly to track performance
2. **Goal Setting**: Set specific conversion goals based on business objectives
3. **Audience Segmentation**: Create segments for different user types
4. **A/B Testing**: Use Google Analytics to compare different versions
5. **Data Privacy**: Ensure compliance with GDPR and privacy laws

## Additional Resources

- [Google Analytics Documentation](https://support.google.com/analytics)
- [Event Tracking Guide](https://support.google.com/analytics/answer/9322688)
- [Conversion Setup Guide](https://support.google.com/analytics/answer/9050852)

## Support

For questions about Google Analytics implementation, refer to the official documentation or contact Google Analytics support.
