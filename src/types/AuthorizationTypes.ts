export type GuestSessionType = {
  expires_at: string;
  guest_session_id: string;
  success: boolean;
};
export interface RequestToken
  extends Omit<GuestSessionType, 'guest_session_id'> {
  request_token: string;
}
