type Props = {
  src: string;
  title: string;
};

export default function NativeVideoEmbed({ src, title }: Props) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-soft bg-white">
      <div className="aspect-video w-full">
        <video className="h-full w-full" src={src} title={title} controls playsInline />
      </div>
    </div>
  );
}
