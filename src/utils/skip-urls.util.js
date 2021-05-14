const skipUrls = [
    { method: ["post"], url: "/auth/login" },
    { method: ["post"], url: "/auth/register" },
    { method: ["post"], url: "/products/bulk" },
    { method: ["get"], url: "/products"} 
];
 
const checkIfToBeSkipped = (request) => {
    const filtered = skipUrls.find((s) => request.url.includes(s.url));
    if(filtered) {
        return filtered.method.includes(request.method.toLowerCase());
    }

    return false;
};

module.exports = checkIfToBeSkipped;