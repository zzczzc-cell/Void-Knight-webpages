// Changes button images when the user hovers over them
const pressableImages = document.querySelectorAll("[data-normal-src][data-pressed-src]");

pressableImages.forEach((image) => {
    const normalSrc = image.dataset.normalSrc;
    const pressedSrc = image.dataset.pressedSrc;

    const preloadPressedImage = new Image();
    preloadPressedImage.src = pressedSrc;

    image.addEventListener("mouseenter", () => {
        image.src = pressedSrc;
    });

    image.addEventListener("mouseleave", () => {
        image.src = normalSrc;
    });
});

// Announcement text for each year
const announcementData = {
    2026: [
        "VOID KNIGHT PATCH 5 TRADITIONAL CHINESE, GERMAN UPDATES & MORE",
        "VOID KNIGHT ARRIVES ON NINTENDO SWITCH 2, PS5 & XBOX SERIES X|S",
        "NEW EXPANSION, WORLD REFRESH, AND MORE CONTENT UPDATES!"
    ],
    2025: [
        "VOID KNIGHT SOUNDTRACK UPDATE AND NEW BOSS THEME RELEASED",
        "BEHIND THE SCENES: BUILDING THE UNDERGROUND KINGDOM",
        "NEW GAMEPLAY PREVIEW SHOWS EXPLORATION AND COMBAT CHANGES"
    ],
    2024: [
        "VOID KNIGHT EARLY DEMO ANNOUNCED FOR PLAYER TESTING",
        "TEAM APPLE SHARES NEW CHARACTER ART AND WORLD DESIGN NOTES",
        "DEVELOPMENT UPDATE: NEW AREAS, ENEMIES, AND PLAYER MOVEMENT"
    ],
    2023: [
        "VOID KNIGHT PROJECT REVEALED BY TEAM APPLE",
        "FIRST CONCEPT ART SHOWS THE RUINED UNDERGROUND WORLD",
        "EARLY COMBAT SYSTEM AND EXPLORATION IDEAS INTRODUCED"
    ],
    more: [
        "OLDER DEVELOPMENT NOTES AND ARCHIVED PROJECT UPDATES",
        "COMMUNITY QUESTIONS ABOUT VOID KNIGHT DEVELOPMENT",
        "MORE NEWS WILL BE ADDED AS THE PROJECT CONTINUES"
    ]
};

// Changes only the announcement text when the user clicks a year
const yearLinks = document.querySelectorAll(".announcement-years a[data-year]");
const announcementTexts = document.querySelectorAll(".announcement-text");

function updateAnnouncements(selectedYear) {
    const selectedAnnouncements = announcementData[selectedYear];

    if (!selectedAnnouncements) {
        return;
    }

    announcementTexts.forEach((text, index) => {
        text.textContent = selectedAnnouncements[index];
    });

    yearLinks.forEach((link) => {
        link.classList.toggle("year-is-active", link.dataset.year === selectedYear);
    });
}

yearLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        updateAnnouncements(link.dataset.year);
    });
});

// Makes the feature and team image cards bigger on hover
const imageCards = document.querySelectorAll(".feature-card, .team-card");

imageCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("card-is-zoomed");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("card-is-zoomed");
    });
});