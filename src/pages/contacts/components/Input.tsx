export default function Input({
  value,
  placeholder,
  type = "text",
}: {
  value?: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      className="bg-transparent text-white outline-none placeholder:text-white text-xl"
      placeholder={placeholder}
    />
  );
}
