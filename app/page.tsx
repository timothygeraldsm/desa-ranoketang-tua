"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Menu,
  X,
  MapPin,
  Wheat,
  Camera,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Mountain,
  Store,
  TreePine,
  Home,
  History,
  Crown,
  Briefcase,
  Images,
  MessageCircle,
  Users,
  User,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VillageProfileWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-green-300" />
              <span className="font-bold text-xl">Desa Sejahtera</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-green-300 transition-colors flex items-center space-x-1"
              >
                <Home className="h-4 w-4" />
                <span>Beranda</span>
              </button>
              <button
                onClick={() => scrollToSection("profile")}
                className="hover:text-green-300 transition-colors flex items-center space-x-1"
              >
                <History className="h-4 w-4" />
                <span>Profil Desa</span>
              </button>
              <button
                onClick={() => scrollToSection("leadership")}
                className="hover:text-green-300 transition-colors flex items-center space-x-1"
              >
                <Crown className="h-4 w-4" />
                <span>Pemerintahan</span>
              </button>
              <button
                onClick={() => scrollToSection("potential")}
                className="hover:text-green-300 transition-colors flex items-center space-x-1"
              >
                <Briefcase className="h-4 w-4" />
                <span>Potensi</span>
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="hover:text-green-300 transition-colors flex items-center space-x-1"
              >
                <Images className="h-4 w-4" />
                <span>Galeri</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-green-300 transition-colors flex items-center space-x-1"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Kontak</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-green-300">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-green-700 pb-4">
              <div className="flex flex-col space-y-2 px-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left py-2 hover:text-green-300 transition-colors flex items-center space-x-2"
                >
                  <Home className="h-4 w-4" />
                  <span>Beranda</span>
                </button>
                <button
                  onClick={() => scrollToSection("profile")}
                  className="text-left py-2 hover:text-green-300 transition-colors flex items-center space-x-2"
                >
                  <History className="h-4 w-4" />
                  <span>Profil Desa</span>
                </button>
                <button
                  onClick={() => scrollToSection("leadership")}
                  className="text-left py-2 hover:text-green-300 transition-colors flex items-center space-x-2"
                >
                  <Crown className="h-4 w-4" />
                  <span>Pemerintahan</span>
                </button>
                <button
                  onClick={() => scrollToSection("potential")}
                  className="text-left py-2 hover:text-green-300 transition-colors flex items-center space-x-2"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Potensi</span>
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-left py-2 hover:text-green-300 transition-colors flex items-center space-x-2"
                >
                  <Images className="h-4 w-4" />
                  <span>Galeri</span>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left py-2 hover:text-green-300 transition-colors flex items-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Kontak</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Selamat Datang di
                <span className="block text-green-300">Desa Sejahtera</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Desa yang kaya akan potensi alam, budaya, dan masyarakat yang gotong royong. Mari mengenal lebih dekat
                kehidupan dan keindahan desa kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("profile")}
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 text-lg"
                >
                  Jelajahi Desa
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 text-lg"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Pemandangan Desa Sejahtera"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Village Profile Section */}
      <section id="profile" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Profil Desa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mengenal lebih dalam tentang sejarah, pemerintahan, demografi, dan geografis Desa Sejahtera
            </p>
          </div>

          {/* Village History */}
          <div className="mb-16">
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <History className="h-7 w-7" />
                  <span>Sejarah Desa</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Desa Sejahtera didirikan pada tahun 1945 oleh sekelompok pendatang dari berbagai daerah yang
                      mencari tanah subur untuk bercocok tanam setelah kemerdekaan Indonesia. Nama "Sejahtera" dipilih
                      sebagai manifestasi harapan kolektif agar desa ini menjadi tempat yang makmur, damai, dan penuh
                      berkah bagi seluruh warganya.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Pada era 1960-an, desa ini mengalami perkembangan pesat dengan dibangunnya infrastruktur dasar
                      seperti jalan desa, sekolah dasar, dan balai desa. Tahun 1980-an menandai era modernisasi dengan
                      masuknya listrik dan air bersih. Memasuki abad ke-21, Desa Sejahtera berkembang menjadi pusat
                      pertanian organik dan destinasi agrowisata yang menarik perhatian wisatawan domestik.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Tradisi gotong royong yang telah mengakar sejak berdirinya desa tetap menjadi kekuatan utama dalam
                      setiap pembangunan dan kegiatan kemasyarakatan. Nilai-nilai kearifan lokal seperti "guyub rukun"
                      dan "tepo seliro" masih dijaga dan dilestarikan hingga saat ini sebagai identitas budaya desa.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Sejarah Desa Sejahtera"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md w-full"
                    />
                    <div className="mt-4 space-y-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-sm">
                        Didirikan 1945
                      </Badge>
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800 text-sm">
                        Listrik 1980an
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-sm">
                        Agrowisata 2000an
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Village Officials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-green-800 mb-4 flex items-center justify-center space-x-3">
                <Crown className="h-8 w-8" />
                <span>Perangkat Desa</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Struktur pemerintahan desa yang berkomitmen melayani masyarakat dengan dedikasi tinggi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Village Head */}
              <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Kepala Desa"
                      width={160}
                      height={160}
                      className="rounded-full mx-auto border-4 border-green-300 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-600 text-white p-2 rounded-full">
                      <Crown className="h-4 w-4" />
                    </div>
                  </div>
                  <CardTitle className="text-green-800 text-lg">Bapak Suharto, S.Sos</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">Kepala Desa</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-3">
                    Memimpin desa sejak 2019 dengan visi memajukan kesejahteraan masyarakat melalui pembangunan
                    berkelanjutan dan pemberdayaan ekonomi lokal.
                  </p>
                  <Badge className="bg-green-600 text-white">Periode 2019-2025</Badge>
                </CardContent>
              </Card>

              {/* Secretary */}
              <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Sekretaris Desa"
                      width={160}
                      height={160}
                      className="rounded-full mx-auto border-4 border-green-300 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                      <Mail className="h-4 w-4" />
                    </div>
                  </div>
                  <CardTitle className="text-green-800 text-lg">Ibu Siti Aminah, S.Pd</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">Sekretaris Desa</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-3">
                    Mengelola administrasi desa dan membantu kelancaran program-program pembangunan serta pelayanan
                    masyarakat.
                  </p>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Administrasi
                  </Badge>
                </CardContent>
              </Card>

              {/* Treasurer */}
              <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Bendahara Desa"
                      width={160}
                      height={160}
                      className="rounded-full mx-auto border-4 border-green-300 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-amber-600 text-white p-2 rounded-full">
                      <Briefcase className="h-4 w-4" />
                    </div>
                  </div>
                  <CardTitle className="text-green-800 text-lg">Bapak Ahmad Yusuf, S.E</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">Bendahara Desa</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-3">
                    Bertanggung jawab atas pengelolaan keuangan desa dan transparansi anggaran untuk kesejahteraan
                    masyarakat.
                  </p>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                    Keuangan
                  </Badge>
                </CardContent>
              </Card>

              {/* Head of Development */}
              <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Kaur Pembangunan"
                      width={160}
                      height={160}
                      className="rounded-full mx-auto border-4 border-green-300 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white p-2 rounded-full">
                      <Wheat className="h-4 w-4" />
                    </div>
                  </div>
                  <CardTitle className="text-green-800 text-lg">Bapak Joko Santoso</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">Kaur Pembangunan</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-3">
                    Mengkoordinasikan program pembangunan infrastruktur dan pengembangan potensi desa.
                  </p>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Pembangunan
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Population Statistics */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-green-800 mb-4 flex items-center justify-center space-x-3">
                <Users className="h-8 w-8" />
                <span>Statistik Penduduk</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Data demografi terkini Desa Sejahtera berdasarkan sensus tahun 2023
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Population */}
              <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-green-800 mb-2">2,450</h4>
                  <p className="text-green-700 font-semibold">Total Penduduk</p>
                  <p className="text-gray-600 text-sm mt-2">Jiwa</p>
                </CardContent>
              </Card>

              {/* Male Population */}
              <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <User className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-blue-800 mb-2">1,235</h4>
                  <p className="text-blue-700 font-semibold">Laki-laki</p>
                  <p className="text-gray-600 text-sm mt-2">50.4%</p>
                </CardContent>
              </Card>

              {/* Female Population */}
              <Card className="border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-pink-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-pink-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <User className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-pink-800 mb-2">1,215</h4>
                  <p className="text-pink-700 font-semibold">Perempuan</p>
                  <p className="text-gray-600 text-sm mt-2">49.6%</p>
                </CardContent>
              </Card>

              {/* Households */}
              <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-amber-50 to-amber-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-amber-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Home className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-amber-800 mb-2">650</h4>
                  <p className="text-amber-700 font-semibold">Kepala Keluarga</p>
                  <p className="text-gray-600 text-sm mt-2">KK</p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Demographics */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800 text-lg">Kelompok Usia</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">0-14 tahun</span>
                      <span className="font-semibold text-green-800">18.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">15-64 tahun</span>
                      <span className="font-semibold text-green-800">68.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">65+ tahun</span>
                      <span className="font-semibold text-green-800">13.3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800 text-lg">Tingkat Pendidikan</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">SD/Sederajat</span>
                      <span className="font-semibold text-green-800">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">SMP/Sederajat</span>
                      <span className="font-semibold text-green-800">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">SMA/Sederajat</span>
                      <span className="font-semibold text-green-800">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Perguruan Tinggi</span>
                      <span className="font-semibold text-green-800">12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800 text-lg">Mata Pencaharian</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Petani</span>
                      <span className="font-semibold text-green-800">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Pedagang</span>
                      <span className="font-semibold text-green-800">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Buruh</span>
                      <span className="font-semibold text-green-800">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">PNS/Swasta</span>
                      <span className="font-semibold text-green-800">20%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Geographic Information */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-green-800 mb-4 flex items-center justify-center space-x-3">
                <MapPin className="h-8 w-8" />
                <span>Informasi Geografis</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Lokasi strategis dan karakteristik geografis Desa Sejahtera
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map */}
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800 flex items-center space-x-2">
                    <MapPin className="h-6 w-6" />
                    <span>Peta Lokasi</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
  <div className="w-full h-80 rounded-md overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.109815119141!2d124.61032444999998!3d1.12085055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328750a67a6d4ca9%3A0x400a90d2a4fa8b2c!2sRanoketang%20Tua%2C%20Amurang%2C%20South%20Minahasa%20Regency%2C%20North%20Sulawesi!5e0!3m2!1sen!2sid!4v1752304864587!5m2!1sen!2sid"
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ border: 0 }}
    />
  </div>
</CardContent>

              </Card>

              {/* Geographic Details */}
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800 flex items-center space-x-2">
                    <Mountain className="h-6 w-6" />
                    <span>Detail Geografis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Koordinat Geografis</h5>
                      <p className="text-gray-600">
                        <span className="font-medium">Lintang:</span> -7.2575° LS
                        <br />
                        <span className="font-medium">Bujur:</span> 112.7521° BT
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Posisi Strategis</h5>
                      <p className="text-gray-600 leading-relaxed">
                        Desa Sejahtera terletak di dataran tinggi dengan ketinggian 450 meter di atas permukaan laut.
                        Desa ini berada 15 km sebelah timur Kota Makmur dan 8 km dari jalan raya provinsi, menjadikannya
                        lokasi yang strategis untuk pengembangan agrowisata.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Batas Wilayah</h5>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Utara:</span>
                          <p className="text-gray-600">Desa Makmur</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Selatan:</span>
                          <p className="text-gray-600">Desa Subur</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Timur:</span>
                          <p className="text-gray-600">Hutan Lindung</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Barat:</span>
                          <p className="text-gray-600">Sungai Jernih</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h6 className="font-semibold text-green-800 text-sm">Luas Wilayah</h6>
                        <p className="text-green-700 font-bold">15.5 km²</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h6 className="font-semibold text-blue-800 text-sm">Ketinggian</h6>
                        <p className="text-blue-700 font-bold">450 mdpl</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Pemerintahan Desa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Struktur kepemimpinan dan pemerintahan Desa Sejahtera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Village Head */}
            <Card className="border-green-200 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Kepala Desa"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto border-4 border-green-300"
                  />
                </div>
                <CardTitle className="text-green-800">Bapak Suharto</CardTitle>
                <CardDescription className="text-green-600 font-semibold">Kepala Desa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Memimpin desa sejak 2019 dengan visi memajukan kesejahteraan masyarakat melalui pembangunan
                  berkelanjutan.
                </p>
                <Badge className="bg-green-600 text-white">Periode 2019-2025</Badge>
              </CardContent>
            </Card>

            {/* Secretary */}
            <Card className="border-green-200 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Sekretaris Desa"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto border-4 border-green-300"
                  />
                </div>
                <CardTitle className="text-green-800">Ibu Siti Aminah</CardTitle>
                <CardDescription className="text-green-600 font-semibold">Sekretaris Desa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Mengelola administrasi desa dan membantu kelancaran program-program pembangunan desa.
                </p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Administrasi
                </Badge>
              </CardContent>
            </Card>

            {/* Treasurer */}
            <Card className="border-green-200 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Bendahara Desa"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto border-4 border-green-300"
                  />
                </div>
                <CardTitle className="text-green-800">Bapak Ahmad Yusuf</CardTitle>
                <CardDescription className="text-green-600 font-semibold">Bendahara Desa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Bertanggung jawab atas pengelolaan keuangan desa dan transparansi anggaran.
                </p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Keuangan
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Potential Section */}
      <section id="potential" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Potensi Desa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kekayaan alam dan potensi ekonomi yang dimiliki Desa Sejahtera
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Agriculture */}
            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <Wheat className="h-6 w-6" />
                  <span>Pertanian</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Pertanian Desa"
                  width={300}
                  height={200}
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="font-semibold text-green-800 mb-2">Hasil Pertanian Utama:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Padi - 500 ton/tahun</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Jagung - 200 ton/tahun</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Sayuran organik</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Buah-buahan tropis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tourism */}
            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <TreePine className="h-6 w-6" />
                  <span>Pariwisata</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Wisata Desa"
                  width={300}
                  height={200}
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="font-semibold text-green-800 mb-2">Destinasi Wisata:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Air Terjun Sejahtera</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Wisata Agro</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Homestay Tradisional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Trekking & Hiking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* UMKM */}
            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <Store className="h-6 w-6" />
                  <span>UMKM</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="UMKM Desa"
                  width={300}
                  height={200}
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="font-semibold text-green-800 mb-2">Usaha Mikro & Kecil:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Kerajinan Bambu</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Makanan Tradisional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Produk Olahan Pertanian</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Warung & Toko Kelontong</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Galeri Desa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Dokumentasi kegiatan dan keindahan Desa Sejahtera</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card
                key={index}
                className="border-green-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=250&width=400&text=Foto ${index}`}
                    alt={`Dokumentasi Desa ${index}`}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white opacity-0 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-green-800 mb-1">
                    {index === 1 && "Panen Raya Padi"}
                    {index === 2 && "Festival Budaya Desa"}
                    {index === 3 && "Gotong Royong Masyarakat"}
                    {index === 4 && "Wisata Air Terjun"}
                    {index === 5 && "Pelatihan UMKM"}
                    {index === 6 && "Pemandangan Sawah"}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {index === 1 && "Kegiatan panen padi yang melibatkan seluruh masyarakat desa"}
                    {index === 2 && "Perayaan budaya tahunan dengan berbagai pertunjukan tradisional"}
                    {index === 3 && "Semangat gotong royong dalam pembangunan infrastruktur desa"}
                    {index === 4 && "Keindahan alam air terjun yang menjadi daya tarik wisata"}
                    {index === 5 && "Program pemberdayaan masyarakat melalui pelatihan UMKM"}
                    {index === 6 && "Hamparan sawah hijau yang menjadi pemandangan khas desa"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut tentang Desa Sejahtera
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800">Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Alamat</p>
                      <p className="text-gray-600">
                        Jl. Raya Desa No. 123, Kec. Sejahtera, Kab. Makmur, Provinsi Bahagia 12345
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Telepon</p>
                      <p className="text-gray-600">(021) 1234-5678</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">info@desasejahtera.id</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800">Media Sosial</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    Ikuti media sosial kami untuk mendapatkan update terbaru tentang kegiatan dan perkembangan desa.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="bg-green-100 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Peta Lokasi</h3>
                <p className="text-gray-600">
                  Peta interaktif akan ditampilkan di sini untuk memudahkan pengunjung menemukan lokasi desa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-green-300" />
                <span className="font-bold text-xl">Desa Sejahtera</span>
              </div>
              <p className="text-green-100 mb-4">
                Desa yang kaya akan potensi alam dan budaya, dengan masyarakat yang gotong royong membangun masa depan
                yang lebih baik.
              </p>
              <div className="flex space-x-3">
                <Link href="#" className="text-green-300 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-green-300 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-green-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Tautan Cepat</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Beranda
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("profile")}
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Profil Desa
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("leadership")}
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Pemerintahan
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("potential")}
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Potensi Desa
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Kontak</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-green-300" />
                  <span className="text-green-100 text-sm">Jl. Raya Desa No. 123, Kec. Sejahtera</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-300" />
                  <span className="text-green-100 text-sm">(021) 1234-5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-green-300" />
                  <span className="text-green-100 text-sm">info@desasejahtera.id</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-green-700" />

          <div className="text-center">
            <p className="text-green-100 text-sm">
              © {new Date().getFullYear()} Desa Sejahtera. Dibuat dengan ❤️ untuk program KKN. Semua hak cipta
              dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
