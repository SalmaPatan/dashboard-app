'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import useDebounce from './hooks/useDebounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  console.log(searchParams)

  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (value: string) => {
    console.log('searchhhhhh', value)
    const params = new URLSearchParams(searchParams)
    console.log(params, searchParams)
    params.set('page', '1')
    if (value) {
      params.set('query', value)
    }
    else {
      params.delete('query')
    }
    replace(`${pathname}?${params}`)
  }
  const debouncedSearch = useDebounce(handleSearch, 2000)
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-violet-950 focus:ring-1 focus:ring-violet-950"
        placeholder={placeholder}
        onChange={(e) => debouncedSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
