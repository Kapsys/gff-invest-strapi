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
    menuItems: Schema.Attribute.Component<'element.menu-items', false>;
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
      'element.menu-items': ElementMenuItems;
      'element.button': ElementButton;
    }
  }
}
