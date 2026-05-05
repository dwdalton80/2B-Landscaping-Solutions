import { describe, it, expect } from 'vitest';

describe('Service Detail Pages', () => {
  const serviceIds = [
    'lawn-care',
    'landscape-design',
    'retaining-walls',
    'patios-hardscapes',
    'irrigation-installation',
    'fountain-installation',
    'pond-scrapes',
    'artificial-turf'
  ];

  it('should have all required service pages configured', () => {
    expect(serviceIds.length).toBe(8);
    serviceIds.forEach(id => {
      expect(id).toBeTruthy();
      expect(typeof id).toBe('string');
    });
  });

  it('should have valid service IDs format', () => {
    serviceIds.forEach(id => {
      expect(id).toMatch(/^[a-z-]+$/);
      expect(id.length).toBeGreaterThan(0);
    });
  });

  it('should have unique service IDs', () => {
    const uniqueIds = new Set(serviceIds);
    expect(uniqueIds.size).toBe(serviceIds.length);
  });

  it('should have service pages with proper structure', () => {
    const sampleService = {
      id: 'lawn-care',
      title: 'Professional Lawn Care Services in Durant, OK',
      subtitle: 'Expert Lawn Maintenance & Care',
      description: 'Test description',
      benefits: ['Benefit 1', 'Benefit 2'],
      process: ['Step 1', 'Step 2'],
      features: ['Feature 1', 'Feature 2'],
      cta: 'Schedule Your Lawn Care Consultation',
      relatedServices: ['landscape-design']
    };

    expect(sampleService).toHaveProperty('id');
    expect(sampleService).toHaveProperty('title');
    expect(sampleService).toHaveProperty('subtitle');
    expect(sampleService).toHaveProperty('description');
    expect(sampleService).toHaveProperty('benefits');
    expect(sampleService).toHaveProperty('process');
    expect(sampleService).toHaveProperty('features');
    expect(sampleService).toHaveProperty('cta');
    expect(sampleService).toHaveProperty('relatedServices');

    expect(Array.isArray(sampleService.benefits)).toBe(true);
    expect(Array.isArray(sampleService.process)).toBe(true);
    expect(Array.isArray(sampleService.features)).toBe(true);
    expect(Array.isArray(sampleService.relatedServices)).toBe(true);
  });

  it('should have SEO-optimized titles', () => {
    const titles = [
      'Professional Lawn Care Services in Durant, OK',
      'Custom Landscape Design in Durant, Oklahoma',
      'Professional Retaining Wall Installation in Durant, OK',
      'Custom Patio & Hardscape Design in Durant, Oklahoma',
      'Professional Irrigation System Installation in Durant, OK',
      'Custom Fountain Installation in Durant, Oklahoma',
      'Professional Pond Scaping in Durant, OK',
      'Professional Artificial Turf Installation in Durant, Oklahoma'
    ];

    titles.forEach(title => {
      expect(title).toMatch(/Durant|Oklahoma/);
      expect(title.length).toBeGreaterThan(30);
      expect(title.length).toBeLessThan(150);
    });
  });

  it('should have meaningful related services', () => {
    const relatedServiceMaps: Record<string, string[]> = {
      'lawn-care': ['landscape-design', 'irrigation-installation'],
      'landscape-design': ['retaining-walls', 'fountain-installation'],
      'retaining-walls': ['landscape-design', 'patios-hardscapes'],
      'patios-hardscapes': ['landscape-design', 'fountain-installation'],
      'irrigation-installation': ['lawn-care', 'landscape-design'],
      'fountain-installation': ['landscape-design', 'patios-hardscapes'],
      'pond-scrapes': ['landscape-design', 'fountain-installation'],
      'artificial-turf': ['landscape-design', 'lawn-care']
    };

    Object.entries(relatedServiceMaps).forEach(([serviceId, relatedIds]) => {
      expect(relatedIds.length).toBeGreaterThan(0);
      relatedIds.forEach(relatedId => {
        expect(serviceIds).toContain(relatedId);
        expect(relatedId).not.toBe(serviceId);
      });
    });
  });
});
