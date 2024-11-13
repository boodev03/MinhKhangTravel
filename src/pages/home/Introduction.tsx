export default function Introduction() {
  return (
    <div className="py-12 px-8">
      <h3 className="mb-10 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
        <span className="text-blue-600 dark:text-blue-500">
          Minh Khang Travel
        </span>{" "}
        - Hành trình an toàn và tiện nghi!
      </h3>
      <div className="flex justify-center">
        <p className="italic text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose lg:leading-loose text-gray-700 md:text-gray-800 lg: text-gray-900 p-4 md:-6 lg:p-8 text-justify">
          <span className="text-blue-600">Minh Khang Travel </span> tự hào là
          đơn vị cung cấp dịch vụ vận chuyển chất lượng cao, đáp ứng nhu cầu di
          chuyển của khách hàng với nhiều dòng xe đa dạng, bao gồm các loại xe 4
          chỗ, 7 chỗ, 16 chỗ, và 29 chỗ. Với mục tiêu mang đến sự an toàn và
          thoải mái, mỗi chiếc xe của chúng tôi đều được trang bị đầy đủ tiện
          nghi hiện đại, bảo dưỡng định kỳ để đảm bảo chất lượng và an toàn
          tuyệt đối trong từng chuyến đi.
        </p>
      </div>
      <div className="grid grip-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-3 flex items-center">
          <p className="italic text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose lg:leading-loose text-gray-700 md:text-gray-800 lg: text-gray-900 p-4 md:-6 lg:p-8 text-justify">
            Nổi bật trong đội ngũ xe của{" "}
            <span className="text-blue-600">Minh Khang Travel </span> là dòng xe
            Kia Carnival - dòng xe 7 chỗ cao cấp, lý tưởng cho những hành trình
            dài và các chuyến đi gia đình hoặc nhóm bạn. Xe Carnival sở hữu
            thiết kế sang trọng, nội thất rộng rãi, cùng hệ thống ghế ngồi bọc
            da cao cấp, có thể điều chỉnh linh hoạt. Hệ thống giải trí tiên tiến
            và điều hòa không khí đa chiều mang đến cho hành khách trải nghiệm
            thư giãn tối đa trên suốt hành trình. Đặc biệt, xe Carnival được
            tích hợp các công nghệ an toàn tiên tiến như hệ thống cảnh báo va
            chạm và hỗ trợ phanh tự động, giúp hành khách yên tâm tận hưởng
            chuyến đi một cách an toàn và tiện nghi nhất.
          </p>
        </div>
        <div>
          <img
            className=""
            src="/images/car-7-slots.png"
            alt="Minh Khang Travel Introduction"
          />
        </div>
      </div>
      <div className="grid grip-cols-1 md:grid-cols-2 gap-4">
        <div className="order-2 md:order-1">
          <img
            className="max-w-[75%] mx-auto rounded-md"
            src="/images/car-7-slots2.png"
            alt="Minh Khang Travel Introduction"
          />
        </div>
        <div className="mb-3 flex items-center order-1 md:order-2">
          <p className="italic text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose lg:leading-loose text-gray-700 md:text-gray-800 lg: text-gray-900 p-4 md:-6 lg:p-8 text-justify">
            Dòng xe Kia Carnival không chỉ là lựa chọn hoàn hảo cho các chuyến
            đi gia đình mà còn rất phù hợp trong việc phục vụ du lịch với số
            lượng hành khách vừa phải. Xe được trang bị các tiện ích hiện đại
            như cổng sạc USB cho từng hàng ghế, hệ thống âm thanh sống động, và
            khoang hành lý rộng rãi, giúp hành khách thoải mái mang theo hành lý
            cá nhân mà không lo chật chội. Carnival còn có khả năng vận hành
            mượt mà trên nhiều địa hình, đảm bảo mang lại trải nghiệm di chuyển
            êm ái và thoải mái nhất, dù là trên các cung đường ngắn trong thành
            phố hay những hành trình dài khám phá các địa điểm du lịch xa.
          </p>
        </div>
      </div>
    </div>
  );
}
