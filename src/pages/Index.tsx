import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/files/d230fd55-0c99-4028-9a6e-f74caade3e37.jpeg",
    "https://cdn.poehali.dev/files/4d24c520-f36c-40af-a867-f447be5a1638.jpeg",
    "https://cdn.poehali.dev/files/5d1e3cd3-b06a-4893-bb38-0a96a989963a.png",
    "https://cdn.poehali.dev/files/02f2c48f-b05b-43e5-9698-9f2aff8e2805.png",
    "/eqirGoRIJPaIMgEUeliWpNxeFmI.jpg",
    "/hyperrealistic_commercial_product_photography_of_luxury_chrome_sunglasses_on_male_model_extreme_chi_fanguv2w9zx489lcivwa_2.png",
    "/ultra-detailed_close-up_side_profile_of_a_dark-skinned_model_wearing_futuristic_chrome_wraparound_s_ps17q5ms2ptu5t6bdru6_2.png",
    "/image 15.png",
    "/VkvvhXlWo3hEBzcqwTpjd_aa4bf9ee998f4ec0b17a8bf16fe3e9e2.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;