// antd-theme.ts - TaskFlow Ant Design Theme Configuration
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    // Primary Colors
    colorPrimary: '#1E5AEE',
    colorSuccess: '#4CAF50',
    colorWarning: '#FFC107',
    colorError: '#F44336',
    colorInfo: '#1E5AEE',
    
    // Typography
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: 14,
    fontSizeHeading1: 32,
    fontSizeHeading2: 22,
    fontSizeHeading3: 20,
    fontWeightStrong: 700,
    
    // Spacing
    marginXS: 4,
    marginSM: 8,
    margin: 16,
    marginMD: 24,
    marginLG: 32,
    marginXL: 48,
    
    paddingXS: 4,
    paddingSM: 8,
    padding: 16,
    paddingMD: 24,
    paddingLG: 32,
    
    // Border Radius
    borderRadius: 8,
    borderRadiusSM: 4,
    borderRadiusLG: 12,
    borderRadiusXL: 24,
    
    // Line Height
    lineHeight: 1.5,
    lineHeightHeading1: 1.1,
    lineHeightHeading2: 1.2,
    
    // Dark Theme Colors
    colorBgBase: '#0F1419',
    colorBgContainer: '#1C2128',
    colorBorder: '#2D3139',
    colorText: '#E7E9EA',
    colorTextSecondary: '#8C9196',
  },
  
  components: {
    Button: {
      primaryColor: '#FFFFFF',
      colorPrimary: '#1E5AEE',
      controlHeight: 40,
      fontSize: 14,
      fontWeight: 700,
      borderRadius: 8,
    },
    
    Card: {
      colorBgContainer: '#1C2128',
      colorBorderSecondary: '#2D3139',
      borderRadiusLG: 12,
      padding: 24,
    },
    
    Statistic: {
      contentFontSize: 36,
      titleFontSize: 14,
      fontFamily: 'Inter',
    },
    
    Badge: {
      colorError: '#F44336',
      colorWarning: '#FFC107',
      colorSuccess: '#4CAF50',
    },
    
    Alert: {
      colorErrorBg: 'rgba(244, 67, 54, 0.1)',
      colorErrorBorder: '#F44336',
      colorError: '#F44336',
    },
    
    Layout: {
      colorBgHeader: '#0F1419',
      colorBgBody: '#0F1419',
      colorBgTrigger: '#1C2128',
      siderBg: '#0F1419',
    },
  },
  
  algorithm: 'dark',
};

export default theme;
