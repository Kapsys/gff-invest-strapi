import type { Struct, Schema } from '@strapi/strapi';

export interface SectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'filter';
    description: '';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    button: Schema.Attribute.Component<'element.button', false>;
  };
}

export interface SectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'Header';
    icon: 'expand';
    description: '';
  };
  attributes: {
    headerLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    menuItems: Schema.Attribute.Component<'element.menu-items', true>;
    button: Schema.Attribute.Component<'element.button', false>;
    languagesSwitcher: Schema.Attribute.Component<
      'element.languages-switcher',
      true
    >;
    languageNotification: Schema.Attribute.Component<
      'element.language-notification',
      true
    >;
  };
}

export interface SectionFooter extends Struct.ComponentSchema {
  collectionName: 'components_section_footers';
  info: {
    displayName: 'Footer';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    menuItems: Schema.Attribute.Component<'element.menu-items', true>;
    socials: Schema.Attribute.Component<'element.socials', true>;
  };
}

export interface ElementSocials extends Struct.ComponentSchema {
  collectionName: 'components_element_socials';
  info: {
    displayName: 'Socials';
    icon: 'eye';
    description: '';
  };
  attributes: {
    socialIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    socialUrl: Schema.Attribute.String;
  };
}

export interface ElementServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_element_services_sections';
  info: {
    displayName: 'Services Section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'element.cards', true>;
  };
}

export interface ElementMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_element_menu_items';
  info: {
    displayName: 'Menu Items';
    icon: 'feather';
  };
  attributes: {
    menuItem: Schema.Attribute.String;
    menuItemUrl: Schema.Attribute.String;
  };
}

export interface ElementLanguagesSwitcher extends Struct.ComponentSchema {
  collectionName: 'components_element_languages_switchers';
  info: {
    displayName: 'Languages Switcher';
    icon: 'code';
  };
  attributes: {
    title: Schema.Attribute.String;
    key: Schema.Attribute.String;
  };
}

export interface ElementLanguageNotification extends Struct.ComponentSchema {
  collectionName: 'components_element_language_notifications';
  info: {
    displayName: 'Language Notification';
    icon: 'connector';
  };
  attributes: {
    description: Schema.Attribute.Text;
    langKey: Schema.Attribute.String;
    title: Schema.Attribute.String;
    button: Schema.Attribute.Component<'element.button', false>;
  };
}

export interface ElementFeaturesText extends Struct.ComponentSchema {
  collectionName: 'components_element_features_texts';
  info: {
    displayName: 'Features Text';
    icon: 'command';
    description: '';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface ElementFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_element_features_sections';
  info: {
    displayName: 'Features section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    leftImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    featureText: Schema.Attribute.Component<'element.features-text', true>;
  };
}

export interface ElementCards extends Struct.ComponentSchema {
  collectionName: 'components_element_cards';
  info: {
    displayName: 'Cards';
    icon: 'crown';
    description: '';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface ElementButton extends Struct.ComponentSchema {
  collectionName: 'components_element_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
  };
  attributes: {
    buttonName: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.hero-section': SectionHeroSection;
      'section.header': SectionHeader;
      'section.footer': SectionFooter;
      'element.socials': ElementSocials;
      'element.services-section': ElementServicesSection;
      'element.menu-items': ElementMenuItems;
      'element.languages-switcher': ElementLanguagesSwitcher;
      'element.language-notification': ElementLanguageNotification;
      'element.features-text': ElementFeaturesText;
      'element.features-section': ElementFeaturesSection;
      'element.cards': ElementCards;
      'element.button': ElementButton;
    }
  }
}
