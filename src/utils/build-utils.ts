import { execSync } from 'child_process';

export const clearBuildCache = () => {
  try {
    execSync('rm -rf .next');
    execSync('rm -rf node_modules/.cache');
    return true;
  } catch (error) {
    console.error('Failed to clear build cache:', error);
    return false;
  }
};

export const validateEnvironment = () => {
  const nodeVersion = process.version;
  const requiredVersion = '>=18.0.0';
  
  if (!nodeVersion.startsWith('v18')) {
    throw new Error(`Node.js version ${requiredVersion} is required. Current version: ${nodeVersion}`);
  }
  
  return true;
};

export const checkDependencies = async () => {
  try {
    execSync('npm outdated');
    return true;
  } catch (error) {
    console.warn('Some dependencies may be outdated:', error);
    return false;
  }
};