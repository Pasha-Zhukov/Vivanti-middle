export default function Banner() {
  return (
    <div className="p-3">
      <h1 className="fs-1 fw-bold  text-start lh-sm ">
        Тест для оценки риска развития сахарного диабета 2 типа (шкала FINDRISC)
      </h1>
      <img
        className="w-100 mt-3"
        src="../public/images/banner.svg"
        alt="banner"
      />
    </div>
  );
}
