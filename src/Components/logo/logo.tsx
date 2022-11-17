import AppLogo from './logo.webp'
const env = process.env;
const logo = {
  width: 54,
  topBarSource: AppLogo,
  url: `${env.NODE_ENV === 'production' ? env.APP_URL : env.REACT_APP_SERVER || `localhost:${env.PORT || 3000}`}`,
  accessibilityLabel: 'Kesan Diary',
}
export default logo
