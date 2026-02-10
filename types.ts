
export interface Module {
  id: number;
  title: string;
  description: string;
  content: string;
  isLocked: boolean;
}

export interface AppState {
  hasAcceptedTerms: boolean;
  currentModuleId: number;
  isMethodUnlocked: boolean;
}
