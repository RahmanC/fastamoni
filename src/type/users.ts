export interface UserType {
  data: {
    first_name: string;
    last_name: string;
    id: number;
  };
}

export interface CreateUserProps {
  handleModal: () => void;
  handleSuccess: () => void;
  loading?: boolean;
}

export interface UpdateUserProps {
  handleModal: () => void;
  handleSuccess: () => void;
  loading?: boolean;
  id: string;
  user_name: string;
}

export interface CreateUserTypes {
  name: string;
  job: string;
}
