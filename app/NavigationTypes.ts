// Navigation type definitions
export type RootStackParamList = {
  Home: undefined;
  SkillDetail: {
    skillName: string;
    skillImage: string;
    skillCategory: string;
  };
};

export type NavigationProps = {
  navigation: {
    navigate: (screen: keyof RootStackParamList, params?: any) => void;
    goBack: () => void;
  };
};
