import { useAuthStore } from "../store/useAuthStore";

export default function ChatPage() {
  const { logout } = useAuthStore();

  return (
    <div className="z-10">
      Chat page
      <button onClick={logout}>log out</button>
    </div>
  );
}
