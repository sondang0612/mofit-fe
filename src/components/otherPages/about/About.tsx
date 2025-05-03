"use client";
import configs from "@/configs";
import { motion } from "framer-motion";
import { useRef } from "react";

const processes = [
  {
    id: 0,
    key: "01",
    label: "Khám phá",
    icon: "/assets/svgs/process_01.svg",
    value:
      "Chúng tôi không ngừng tìm kiếm những xu hướng, chất liệu và công nghệ mới nhất để tuyển chọn các sản phẩm thể thao tốt nhất, đáp ứng nhu cầu đa dạng của các vận động viên và người yêu thể thao.",
  },
  {
    id: 1,
    key: "02",
    label: "Hợp tác",
    icon: "/assets/svgs/process_02.svg",
    value:
      "Chúng tôi hợp tác chặt chẽ với các đối tác trong và ngoài nước để mang đến những sản phẩm sáng tạo, chất lượng cao, kết hợp giữa chuyên môn và niềm đam mê thể thao.",
  },
  {
    id: 2,
    key: "03",
    label: "Sáng tạo",
    icon: "/assets/svgs/process_03.svg",
    value:
      "Từ ý tưởng đến hiện thực, mỗi bộ sưu tập được chúng tôi thiết kế và chọn lọc kỹ lưỡng, đáp ứng các tiêu chuẩn về hiệu suất, độ bền và phong cách cho mọi tín đồ thể thao.",
  },
  {
    id: 3,
    key: "04",
    label: "Kết nối",
    icon: "/assets/svgs/process_04.svg",
    value:
      "Chúng tôi tạo dựng sự gắn kết với khách hàng thông qua những trải nghiệm năng động, xây dựng cộng đồng tràn đầy nhiệt huyết về sức khỏe, thể lực và tinh thần thi đấu.",
  },
  {
    id: 4,
    key: "05",
    label: "Cam kết",
    icon: "/assets/svgs/process_05.svg",
    value:
      "Cam kết của chúng tôi không chỉ dừng lại ở việc bán sản phẩm — mà còn lan tỏa phong cách sống thể thao, xây dựng niềm tin và sự xuất sắc thông qua dịch vụ và hỗ trợ liên tục.",
  },
];

// Animation variants for consistent animation patterns
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.165, 0.84, 0.44, 1], // cubic bezier for smooth easing
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const lineDrawing = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.5 },
    },
  },
};

export default function About() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef}>
      <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center">
        <div className="container tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center">
          {/* Hero section with reveal animation */}
          <motion.h2
            className="md:tw-text-[14rem] tw-text-[6.25rem] tw-w-fit tw-text-[#FF6D3B] tw-text-center"
            style={{ fontFamily: "Anton" }}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 1.0, 0.5, 1.0], // Spring-like easing
            }}
          >
            Our story
          </motion.h2>

          <motion.p
            className="tw-max-w-[28.375rem] md:-tw-ml-[11.5rem] tw-text-base tw-text-black tw-mt-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Double Fish Sports Group ghi nhận kí ức của nhiều thế hệ, gánh vác
            ước mơ của nhiều thế hệ. Từ giữa thế kỷ trước đến nay, từ sông Châu
            Đốc đến toàn bộ Trung Quốc và mọi ngóc ngách của thế giới, Double
            Fish Group khai thác một truyền thuyết bất tử và chạy đua vào một
            thời đại mới.
          </motion.p>

          {/* Image with subtle float animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="tw-my-[3.875rem]"
          >
            <motion.img
              src={configs.about_us.about_centre}
              alt="About Center"
              className="tw-h-[27.125rem] tw-w-[40.1875rem]"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          {/* Text with character by character reveal effect */}
          <motion.div
            className="tw-text-[3rem] md:tw-text-[3.625rem] tw-text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.01,
                },
              },
              hidden: {},
            }}
          >
            {`Vào những năm 1950, bên cạnh chùa Bồ Lô, thế hệ đầu tiên của Double Fish bắt đầu kinh doanh chỉ với ba kho báu. Lúc bấy giờ, người ta không thể tưởng tượng được rằng Double Fish sẽ vang danh khắp thế giới sau vài thập kỷ. Với hành trình gian khổ suốt nhiều thập kỷ, Double Fish nỗ lực tạo ra những sản phẩm tốt nhất và chinh phục vị trí vô địch. Từ những năm 1970, Double Fish đã được thế giới công nhận và thu hút sự chú ý, trở thành thương hiệu Trung Quốc quốc tế đầu tiên.`
              .split("")
              .map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.2 },
                    },
                  }}
                >
                  {char}
                </motion.span>
              ))}
          </motion.div>
        </div>

        {/* Process section with scroll-triggered animations */}
        <motion.div
          className="tw-mt-20 md:tw-mt-32 tw-flex tw-flex-col md:tw-flex-row tw-gap-10 md:tw-gap-[17.75rem] tw-px-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            className="flex tw-flex-col tw-w-full md:tw-w-1/3"
            variants={fadeInUp}
          >
            <motion.h3
              className="tw-uppercase tw-text-black tw-text-[6.25rem]"
              style={{ fontFamily: "Anton" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Quy trình
            </motion.h3>
            <motion.p className="tw-text-lg tw-text-black" variants={fadeInUp}>
              Trong suốt hành trình phát triển, chúng tôi đảm bảo sự giao tiếp
              nhất quán và tận tâm, để mỗi sản phẩm đều phản ánh niềm đam mê thể
              thao và phù hợp với sứ mệnh truyền cảm hứng cho lối sống năng
              động.
            </motion.p>
          </motion.div>

          {/* Process cards with staggered entrance and hover effects */}
          <div className="grid tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-gap-[4.125rem]">
            {processes.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.08)",
                  transition: { duration: 0.3 },
                }}
                className="tw-p-5 tw-rounded-lg"
              >
                <motion.div
                  className="tw-text-xs tw-text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 * item.id }}
                >
                  {item.key}
                </motion.div>

                <motion.div
                  className="tw-mt-9 tw-mb-11"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2 * item.id + 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <img src={item.icon} alt={item.label} />
                </motion.div>

                <motion.div
                  className="tw-text-2xl tw-text-black tw-mb-[0.296875rem]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 * item.id + 0.4 }}
                >
                  {item.label}
                </motion.div>

                <motion.div
                  className="tw-text-lg tw-text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 * item.id + 0.5 }}
                >
                  {item.value}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA section with parallax effect */}
      <motion.div
        className="tw-flex md:tw-flex-row tw-flex-col md:tw-mt-32 tw-mt-16 tw-px-14 md:tw-gap-[5rem] tw-gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <motion.div
            className="tw-text-[3.75rem] tw-text-black tw-leading-[4.5rem] tw-mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Hòa mình vào dòng chảy thể thao đỉnh cao cùng Double Fish – và chinh
            phục những giới hạn mới.
          </motion.div>
          <motion.div
            className="tw-text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Sẵn sàng cùng bạn vươn xa hơn.
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={configs.about_us.about_com}
              alt="Double Fish Sports"
              className="tw-h-auto tw-w-full tw-rounded-lg"
            />
          </motion.div>

          <motion.div
            className="md:tw-text-base tw-text-sm tw-text-black tw-mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            MOFIT Là nhà phân phối độc quyền của thương hiệu Double Fish tại
            Việt Nam, chúng tôi cam kết mang đến cho bạn những sản phẩm chất
            lượng quốc tế, từ dụng cụ bóng bàn đến thiết bị thể thao chuyên
            nghiệp. Chúng tôi không chỉ cung cấp sản phẩm – chúng tôi kết nối
            đam mê, thúc đẩy tinh thần thi đấu và đồng hành cùng bạn trên hành
            trình chinh phục đỉnh cao.
          </motion.div>

          <motion.div
            className="tw-mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              className="tw-border tw-rounded-full tw-border-black tw-border-solid tw-px-9 tw-py-4 tw-text-sm tw-text-black tw-inline-block"
              style={{ borderWidth: 2 }}
              target="_blank"
              href="https://zalo.me/0923680808"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FF6D3B",
                color: "white",
                borderColor: "#FF6D3B",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Liên hệ ngay
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
