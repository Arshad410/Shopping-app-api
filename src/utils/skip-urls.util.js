const skipUrls = [
    { method: ["post"], url: "/auth/login" },
    { method: ["post"], url: "/auth/register" },
    { method: ["get"], url: "/product" },
    { method: ["post"], url: "/order"}
];

const checkIfToBeSkipped = (request) => {
    const filtered = skipUrls.find((s) => request.url.includes(s.url));
    if(filtered) {
        return filtered.method.includes(request.method.toLowerCase());
    }

    return false;
};

module.exports = checkIfToBeSkipped;