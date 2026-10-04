export default function PasswordGate({ next, error }: { next: string; error: boolean }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-sm" aria-labelledby="access-heading">
        <p className="mb-3 text-sm text-gray-500">Charlotte Tsui</p>
        <h1 id="access-heading" className="text-3xl font-semibold tracking-tight">A little privacy, please.</h1>
        <p className="mt-4 text-gray-600 leading-relaxed">Enter the password to explore my portfolio.</p>
        <form action="/api/unlock" method="post" className="mt-8">
          <input type="hidden" name="next" value={next} />
          <label htmlFor="password" className="mb-2 block text-sm font-medium">Password</label>
          <input id="password" name="password" type="password" required autoComplete="current-password"
            maxLength={128} aria-invalid={error} aria-describedby={error ? "password-error" : undefined}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
          {error && <p id="password-error" role="alert" className="mt-3 text-sm text-red-700">That password didn’t match. Please try again.</p>}
          <button type="submit" className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-3 font-medium text-white hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Enter portfolio</button>
        </form>
      </section>
    </main>
  );
}
