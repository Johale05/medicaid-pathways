type Props = {
  src: string;
  title: string;
  poster?: string;
  captions?: {
    src: string;
    srcLang: string;
    label: string;
  };
};

export default function NativeVideoEmbed({ src, title, poster, captions }: Props) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-soft bg-white">
      <div className="aspect-video w-full">
        <video
          className="h-full w-full"
          src={src}
          title={title}
          poster={poster}
          crossOrigin="anonymous"
          controls
          controlsList="nodownload"
          playsInline
        >
          {captions && (
            <track kind="captions" src={captions.src} srcLang={captions.srcLang} label={captions.label} default />
          )}
        </video>
      </div>
    </div>
  );
}
