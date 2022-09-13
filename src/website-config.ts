export interface WebsiteConfig {
  title: string;
  titleshort: string;
  description: string;
  subdescription: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  showConnect: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpserver?: string;
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpNameFieldName?: string;
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
  footerBrand?: string;
  footerTech?: string;
}

const config: WebsiteConfig = {
  title: 'Morning base',
  titleshort: 'Morning ',
  description: 'A quiet daily morning discovery',
  subdescription: 'A Gatsby Site Demo',
  coverImage: 'img/blog-cover.png',
  logo: 'Wema-Logos/Wemalabs-35-bg.png',
  lang: 'en',
  siteUrl: 'https://morning-base.vercel.app/',
  facebook: '#https://www.facebook.com/ghost',
  twitter: '#https://twitter.com/tryghost',
  showSubscribe: true,
  showConnect: false,
  mailchimpName: 'mc-embedded-subscribe-form',
  mailchimpserver: 'https://us16.admin.mailchimp.com/',
  mailchimpAction: "https://app.us16.list-manage.com/subscribe/post?u=7900a6070b88a4a4710a25cba&amp;id=8e906e2641",
  mailchimpEmailFieldName: 'MERGE0',
  mailchimpNameFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: ' Wemalabs ',
  footerBrand: ' Wemalabs ',
  footerTech: ' Using Gatsby',
};

export default config;
