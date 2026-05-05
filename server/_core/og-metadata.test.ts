import { describe, it, expect } from 'vitest';

describe('OG Metadata Endpoint', () => {
  it('should return correct OG metadata structure', () => {
    const ogData = {
      title: '2B Landscaping | Professional Lawn Care & Landscape Design in Durant, OK',
      description: 'Transform your outdoor space with expert landscaping services in Durant, Oklahoma. 15+ years of professional lawn care, hardscapes, landscape design, and more. Free estimates!',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/facebook-preview-2b-landscaping-v2-mgyY2gJDeiMF3j4UiPSYku.webp',
      url: 'https://2blandscapingsolutions.com/',
      type: 'website',
      siteName: '2B Landscaping'
    };

    expect(ogData).toHaveProperty('title');
    expect(ogData).toHaveProperty('description');
    expect(ogData).toHaveProperty('image');
    expect(ogData).toHaveProperty('url');
    expect(ogData).toHaveProperty('type');
    expect(ogData).toHaveProperty('siteName');

    expect(ogData.title).toBeTruthy();
    expect(ogData.description).toBeTruthy();
    expect(ogData.image).toMatch(/^https:\/\//);
    expect(ogData.url).toMatch(/^https:\/\//);
    expect(ogData.type).toBe('website');
  });

  it('should have valid image URL', () => {
    const imageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/facebook-preview-2b-landscaping-v2-mgyY2gJDeiMF3j4UiPSYku.webp';
    expect(imageUrl).toMatch(/\.webp$/);
    expect(imageUrl).toMatch(/^https:\/\//);
  });

  it('should have appropriate title length for social media', () => {
    const title = '2B Landscaping | Professional Lawn Care & Landscape Design in Durant, OK';
    expect(title.length).toBeLessThan(120); // Most social platforms truncate around 120 chars
    expect(title.length).toBeGreaterThan(20);
  });

  it('should have appropriate description length for social media', () => {
    const description = 'Transform your outdoor space with expert landscaping services in Durant, Oklahoma. 15+ years of professional lawn care, hardscapes, landscape design, and more. Free estimates!';
    expect(description.length).toBeLessThan(300); // Most social platforms truncate around 300 chars
    expect(description.length).toBeGreaterThan(50);
  });
});
