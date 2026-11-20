/* Lightweight, accessible interactions. No trackers and no build dependencies. */
(() => {
  "use strict";

  const vi = {
    skip: "Bỏ qua phần điều hướng",
    nav_about: "Giới thiệu",
    nav_expertise: "Chuyên môn",
    nav_journey: "Hành trình",
    nav_approach: "Triết lý",
    nav_contact: "Kết nối",
    nav_available: "Sẵn sàng hợp tác",
    hero_eyebrow: "KỸ SƯ BACKEND · VIỆT NAM",
    hero_line1: "Kiến tạo",
    hero_line2: "phần vô hình.",
    hero_subtitle: "Mình biến những hệ thống phức tạp thành trải nghiệm đáng tin cậy — từ API bên dưới đến hạ tầng cloud giữ mọi thứ vận hành.",
    hero_cta: "Cùng hợp tác nhé",
    hero_secondary: "Xem hành trình của mình",
    hero_note_strong: "Minh Khôi Trần",
    hero_note: "Software Engineer · Khoảng 5 năm kinh nghiệm",
    visual_1_label: "TRẢI NGHIỆM",
    visual_1: "Những gì người dùng thấy",
    visual_2_label: "BACKEND",
    visual_2: "Những gì giúp sản phẩm chạy",
    visual_3_label: "ĐỘ TIN CẬY",
    visual_3: "Những gì giữ hệ thống ổn định",
    visual_foot: "Kỹ thuật tốt kết nối mọi tầng.",
    focus_label: "ĐIỀU MÌNH TẬP TRUNG",
    focus_1: "Hệ thống backend",
    focus_2: "Cloud & triển khai",
    focus_3: "Trải nghiệm lập trình",
    focus_4: "Tự động hóa thực tiễn",
    about_tag: "MỘT CHÚT VỀ MÌNH",
    about_h1: "Mình quan tâm đến phần",
    about_h2: "bạn không nhìn thấy.",
    about_lead: "Hệ thống tốt không cần phô trương. Nó nhanh khi cần, an toàn từ thiết kế và dễ hiểu khi xảy ra sự cố.",
    about_p1: "Mình là Software Engineer chuyên về backend tại Việt Nam, có khoảng 5 năm kinh nghiệm phát triển ứng dụng và giải quyết các bài toán xung quanh chúng.",
    about_p2: "Theo thời gian, mối quan tâm của mình mở rộng từ API và cơ sở dữ liệu sang kiến trúc, cloud infrastructure, CI/CD, độ tin cậy và những quyết định kỹ thuật giúp sản phẩm tiến lên.",
    about_signature: "Luôn tò mò. Luôn thực tế.",
    expertise_tag: "CÔNG CỤ & CÁCH TƯ DUY",
    expertise_top: "Công cụ thay đổi. Nền tảng còn mãi.",
    expertise_h1: "Xây dựng từ",
    expertise_h2: "nền tảng vững chắc.",
    exp1_title: "Backend engineering",
    exp1_body: "Ranh giới dịch vụ rõ ràng, API có chủ đích, xác thực, mô hình dữ liệu và code dễ bảo trì — không chỉ chạy tốt ở lần release đầu tiên.",
    exp2_title: "Cloud & hạ tầng",
    exp2_body: "Nhìn xa hơn ngày deploy: infrastructure as code, quyền truy cập phù hợp, pipeline triển khai và môi trường dễ hiểu, dễ vận hành.",
    exp3_title: "Phát triển hướng sản phẩm",
    exp3_body: "Kết nối quyết định backend với luồng người dùng, giao diện rõ ràng, tự động hóa và những cải tiến nhỏ tạo ra giá trị lâu dài.",
    expertise_note: "Mình không chạy theo mọi công cụ mới. Mình chọn công cụ đúng với vấn đề.",
    journey_tag: "MÌNH ĐÃ PHÁT TRIỂN THẾ NÀO",
    journey_h1: "Từ viết code",
    journey_h2: "đến tư duy hệ thống.",
    journey_intro: "Không phải danh sách chức danh hay cột mốc tự dựng. Đây là cách tư duy kỹ thuật của mình đã mở rộng.",
    journey_phase1: "NỀN TẢNG",
    journey_1_title: "Làm cho đúng — và hiểu vì sao.",
    journey_1_body: "Xây nền tảng backend vững chắc: thiết kế API, làm việc với cơ sở dữ liệu, xử lý dữ liệu và lỗi, viết code để người tiếp theo dễ hiểu.",
    journey_phase2: "HỆ THỐNG",
    journey_2_title: "Nhìn vượt ra ngoài một dịch vụ.",
    journey_2_body: "Chú trọng ranh giới hệ thống, xác thực, tích hợp, các tình huống lỗi, hiệu năng và đánh đổi trong quyết định kiến trúc.",
    journey_phase3: "LÀM CHỦ VẬN HÀNH",
    journey_3_title: "Quan tâm cả những gì diễn ra sau merge.",
    journey_3_body: "Mở rộng sang cloud, Terraform, CI/CD, khả năng quan sát, phân quyền và an toàn release — vì triển khai cũng là một phần của engineering.",
    journey_phase4: "HIỆN TẠI & TIẾP THEO",
    journey_4_title: "Xây đúng thứ, theo cách tốt hơn.",
    journey_4_body: "Kết nối tư duy backend với giá trị sản phẩm, giao tiếp rõ ràng, tự động hóa hữu ích và thói quen học hỏi qua những bài toán thực tế.",
    work_tag: "BÀI TOÁN MÌNH THÍCH GIẢI",
    work_top: "Tư duy đằng sau việc triển khai",
    work_h1: "Ít nhiễu hơn.",
    work_h2: "Kỹ thuật hữu ích hơn.",
    work1_title: "Định danh & niềm tin",
    work1_body: "Luồng xác thực, ranh giới phân quyền, giao tiếp dịch vụ an toàn và làm tốt những chi tiết bảo mật quan trọng nhưng dễ bị bỏ qua.",
    work2_title: "Triển khai an toàn hơn",
    work2_body: "Thay đổi hạ tầng, giới hạn quyền, CI workflow, release gate và phân biệt rõ kiểm chứng giả lập với hành vi thực tế.",
    work3_title: "Hệ thống dễ sử dụng",
    work3_body: "Kết nối dịch vụ backend với trải nghiệm web, giữ quy tắc nghiệp vụ nhất quán và làm các luồng phức tạp trở nên đơn giản.",
    work4_title: "Rõ ràng dưới áp lực",
    work4_body: "Log hữu ích, review có hành động, hệ thống dễ bảo trì và thói quen tìm bằng chứng trước khi tuyên bố đã xử lý xong.",
    work_privacy: "Nhiều công việc chuyên môn của mình thuộc về các nhóm và codebase riêng tư. Mình chia sẻ bài toán kỹ thuật và kinh nghiệm rút ra, không công khai dữ liệu khách hàng hay mã nguồn độc quyền.",
    approach_tag: "CÁCH MÌNH LÀM VIỆC",
    approach_quote_1: "Xây dựng có suy nghĩ.",
    approach_quote_2: "Kiểm chứng trung thực.",
    approach_quote_3: "Không ngừng học hỏi.",
    principle_1: "Hiểu vấn đề trước khi tối ưu.",
    principle_2: "Ưu tiên rõ ràng hơn phức tạp.",
    principle_3: "Xác minh kết quả thực tế.",
    contact_eyebrow: "CÓ Ý TƯỞNG NÀO THÚ VỊ KHÔNG?",
    contact_h1: "Cùng xây dựng",
    contact_h2: "điều tiếp theo.",
    contact_body: "Mình sẵn sàng trao đổi về freelance, hợp tác và các bài toán backend, cloud, phần mềm giải quyết được vấn đề thực tế.",
    contact_cta: "Kết nối qua GitHub",
    contact_secondary: "Khám phá GitHub",
    contact_note: "Không thổi phồng số liệu. Không dùng từ hoa mỹ vô nghĩa. Chỉ có kỹ thuật tốt và những cuộc trao đổi có ích.",
    footer_note: "Thiết kế có chủ đích, xây dựng cẩn thận.",
    footer_top: "Về đầu trang ↑"
  };

  const translatable = [...document.querySelectorAll("[data-i18n]")];
  const en = Object.fromEntries(translatable.map((element) => [element.dataset.i18n, element.textContent]));
  const toggle = document.getElementById("language-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  const header = document.getElementById("header");
  const progress = document.getElementById("read-progress");
  const year = document.getElementById("year");

  let lang = "en";
  try { lang = localStorage.getItem("mk-portfolio-lang") === "vi" ? "vi" : "en"; } catch { /* blocked storage */ }

  function applyLanguage(next) {
    lang = next === "vi" ? "vi" : "en";
    translatable.forEach((element) => {
      const key = element.dataset.i18n;
      if (lang === "vi" && Object.prototype.hasOwnProperty.call(vi, key)) {
        element.textContent = vi[key];
      } else if (Object.prototype.hasOwnProperty.call(en, key)) {
        element.textContent = en[key];
      }
    });
    document.documentElement.lang = lang;
    document.title = lang === "vi" ? "Minh Khôi Trần — Kỹ sư Backend & Phần mềm" : "Minh Khoi Tran — Backend & Software Engineer";
    if (toggle) {
      toggle.classList.toggle("is-vi", lang === "vi");
      toggle.setAttribute("aria-label", lang === "vi" ? "Chuyển sang tiếng Anh" : "Switch language to Vietnamese");
      toggle.setAttribute("title", lang === "vi" ? "Chuyển sang tiếng Anh" : "Switch to Vietnamese");
    }
    if (menuToggle) menuToggle.setAttribute("aria-label", lang === "vi" ? "Mở menu điều hướng" : "Open navigation");
    try { localStorage.setItem("mk-portfolio-lang", lang); } catch { /* blocked storage */ }
  }

  if (toggle) toggle.addEventListener("click", () => applyLanguage(lang === "en" ? "vi" : "en"));
  applyLanguage(lang);

  function closeMenu() {
    if (nav) nav.classList.remove("open");
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", lang === "vi" ? "Mở menu điều hướng" : "Open navigation");
    }
    document.body.classList.remove("menu-open");
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      nav.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open
        ? (lang === "vi" ? "Đóng menu điều hướng" : "Close navigation")
        : (lang === "vi" ? "Mở menu điều hướng" : "Open navigation"));
      document.body.classList.toggle("menu-open", open);
      if (open) nav.querySelector("a")?.focus();
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuToggle.focus();
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) closeMenu();
    });
  }

  if (year) year.textContent = String(new Date().getFullYear());

  let scheduled = false;
  function updateScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (maxScroll > 0 ? Math.min(100, window.scrollY / maxScroll * 100) : 0) + "%";
    if (header) header.classList.toggle("scrolled", window.scrollY > 12);
    scheduled = false;
  }
  window.addEventListener("scroll", () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateScroll);
    }
  }, { passive: true });
  updateScroll();

  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-motion");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -32px 0px", threshold: .06 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  }
  if ("IntersectionObserver" in window && nav) {
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
        }
      });
    }, { rootMargin: "-25% 0px -66% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
  }
})();
