module.exports = {
    "*/**/*.{ts,tsx}" : () => ["tsc --noEmit"],
    "*/**/*.{js,ts,tsx}": [
        "prettier --write",
        "eslint --fix",
        "eslint"
    ],
    "*/**/*.{json,css,md}": [
        "prettier --write"
    ]
}