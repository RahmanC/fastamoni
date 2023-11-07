export interface AppModalProps {
  children: React.ReactNode;
  visible?: boolean;
  handleModalClose: () => void;
}

export interface ConditionProps {
  children?: React.ReactNode;
  isVisible?: any;
}
