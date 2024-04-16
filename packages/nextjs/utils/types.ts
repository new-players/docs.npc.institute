export class ErrorCode {
  public static readonly OK = 0;
  public static readonly FAILED = 1;
  public static readonly VALIDATION_ERROR = 1001;
  public static readonly NOT_FOUND = 1002;
}

export interface GenericResponse<T> {
  status?: number;
  message?: string;
  data: T;
  code: ErrorCode;
}
