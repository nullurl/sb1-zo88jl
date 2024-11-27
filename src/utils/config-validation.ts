export const validateNextConfig = (config: any) => {
  const requiredFields = ['i18n', 'images', 'experimental'];
  const missingFields = requiredFields.filter(field => !config[field]);
  
  if (missingFields.length > 0) {
    throw new Error(`Missing required configuration fields: ${missingFields.join(', ')}`);
  }
  
  // Validate i18n configuration
  if (!config.i18n.defaultLocale || !Array.isArray(config.i18n.locales)) {
    throw new Error('Invalid i18n configuration');
  }
  
  // Validate image configuration
  if (!Array.isArray(config.images.domains) || !Array.isArray(config.images.formats)) {
    throw new Error('Invalid image configuration');
  }
  
  return true;
};