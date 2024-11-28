import Link from "next/link";

export const about = (
  <div>
    <p className="mb-3">
      I am a seasoned Full-Stack Software Engineer with over 5 years of
      experience crafting high-performance web applications.
    </p>
    <p className="mb-3">
      I specialize in bridging design and functionality, creating intuitive
      UI/UX interfaces, and integrating robust backend systems. My expertise
      spans the entire development lifecycle, from building scalable front-end
      architectures to managing databases for optimal performance.
    </p>
    <p className="mb-3">
      As a leader, I have successfully guided cross-functional teams to deliver
      end-to-end, user-centric solutions that align with business goals. I am
      passionate about solving complex technical challenges, streamlining
      workflows, and transforming innovative ideas into impactful digital
      products.
    </p>
    <p>
      Additionally, I founded a commercial organization called
      <Link
        href={"https://allwes.id"}
        className="font-semibold hover:text-primary"
        target="_blank"
      >
        {" "}
        AllWes{" "}
      </Link>
      where I serve as the President Director. At AllWes, my mission is to
      empower micro, small, and medium-sized enterprises (MSMEs) to achieve
      sustainable growth through tailored technological solutions, driving
      meaningful change in the business landscape.
    </p>
  </div>
);
