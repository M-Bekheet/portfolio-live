export interface SendEmailState {
  success: boolean;
  errorMessage: string;
  errors?:
    | {
        name?: string[] | undefined;
        email?: string[] | undefined;
        description?: string[] | undefined;
        position?: string[] | undefined;
        company?: string[] | undefined;
      }
    | {};
}
