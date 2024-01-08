# firstclass frontend findout

Hello and thanks for trying out with us!

You will find here a few tests. These are composed of some basic yet bit challenging problems we've had to solve on the job.
This will also allow you to have a glimpse of what we work on at 99 GROUP and see if that's interesting to you.
Finally, this'll provide us with insights on your working style.

## Submission

You have 2 days to complete the challenge. Though realistically, this shouldn't take you more than 4 hours.

Please fork this and once you complete, send us back the forked link to nafhul@99.co, dian.baghawan@99.co, priyandiono@99.co and ilmiyantif@99.co.

As an alternative, you can do the challenge in a Next.js environment, publish it to Vercel and send the public repository link instead.

## Challenges

### Mandatory

1. Implement the [following design](https://www.figma.com/file/zT67hKBce1jfyZPkx5cGrg/FE-challenge---Project-card-design).

2. Use the https://cm9pv7-3000.csb.app/mock-api.json (or the equivalent public url of your fork, something like `${yourSandboxUrl}/mock-api.json`)as the mock data source

Notes:

- You will have to register on Figma if you don't already have an account

3. Hide description until the button is clicked, but because of SEO we want to only hide description after page load. In other word, web crawler should be able to read the description (minus the phone number, detail on #3), regular user on browser should see be able to see it after the button is clicked.

4. Anonymize all phone numbers: first 4 numbers visible, replace following 4 with X (e.g. 8111 XXXX or 8123 XXXX)

Note:

- Singapore phone number format is always 8 numbers long.
- See [Number Ranges on wikipedia](https://en.wikipedia.org/wiki/Telephone_numbers_in_Singapore#Number_ranges) for precise rules.

5. Clicking on each phone number reveals its real number

6. Line returns (new lines) in the description text should be displayed on page. The text must NOT be all in one line.

### Bonus points

1. Main pic is too heavy, please suggest ways to reduce its weight.
2. We are looking for a first-class front-end, so please implement ways to improve the end result, clues: (but not limited to) performance, UX, DX.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
