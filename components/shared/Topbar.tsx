"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { dark } from '@clerk/themes'
import { SignOutButton, SignedIn } from '@clerk/clerk-react'
import { OrganizationSwitcher } from '@clerk/nextjs'

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/X.png" alt="logo" width={70} height={70} />
        {/* <h1 className="text-heading3-bold text-light-1 max-xs:hidden">Voxen</h1> */}
      </Link>

      <div className="flex gap-5">
        <OrganizationSwitcher appearance={{
          baseTheme: dark,
          elements: {
            organizationSwitcherTrigger: "py-2 px-3"
          }
        }} />

        <div className="flex items-center gap-1">
          <div className="block sm:hidden">
            <SignedIn>
              <SignOutButton>
                <div className="flex cursor-pointer">
                  <Image src="/assets/logout.svg" alt="logout" width={20} height={20} />
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Topbar