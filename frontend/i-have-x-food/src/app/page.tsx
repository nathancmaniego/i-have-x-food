"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Sparkles, Target, Clock } from "lucide-react"
import Image from "next/image"

// Mock recipe data
const mockRecipes = [
  {
    id: 1,
    title: "High-Protein Chicken Bowl",
    description:
      "Grilled chicken with quinoa and roasted vegetables. Perfect for muscle building with 45g protein per serving.",
    image: "/placeholder.svg?height=200&width=300",
    cookTime: "25 min",
    protein: "45g",
    calories: "520",
  },
  {
    id: 2,
    title: "Mediterranean Salmon Salad",
    description: "Fresh salmon with mixed greens, olives, and feta. Light yet satisfying for cutting goals.",
    image: "/placeholder.svg?height=200&width=300",
    cookTime: "15 min",
    protein: "38g",
    calories: "380",
  },
  {
    id: 3,
    title: "Power Smoothie Bowl",
    description: "Protein-packed smoothie bowl with berries, nuts, and seeds. Great for post-workout recovery.",
    image: "/placeholder.svg?height=200&width=300",
    cookTime: "10 min",
    protein: "28g",
    calories: "420",
  },
]

export default function FitnessMealPlanner() {
  const [ingredients, setIngredients] = useState("")
  const [fitnessGoal, setFitnessGoal] = useState("")
  const [showRecipes, setShowRecipes] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ingredients.trim() || !fitnessGoal) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setShowRecipes(true)
  }

  const handleOptimizeWithAI = (recipeId: number) => {
    // Handle AI optimization
    console.log(`Optimizing recipe ${recipeId} with AI`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-100 rounded-full">
                <ChefHat className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What Can I Cook with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                What I Have?
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get personalized recipes tailored to your fitness goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Goal-Based Nutrition</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>AI-Powered Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Quick & Easy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-semibold text-gray-900">Find Your Perfect Recipe</CardTitle>
              <CardDescription className="text-gray-600">
                Tell us what you have and what you're working towards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="ingredients" className="text-sm font-medium text-gray-700">
                    What ingredients do you have?
                  </label>
                  <Textarea
                    id="ingredients"
                    placeholder="e.g., chicken breast, broccoli, rice, olive oil, garlic..."
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="min-h-[100px] resize-none border-gray-200 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                  <p className="text-xs text-gray-500">List the ingredients you have available, separated by commas</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="fitness-goal" className="text-sm font-medium text-gray-700">
                    What's your fitness goal?
                  </label>
                  <Select value={fitnessGoal} onValueChange={setFitnessGoal} required>
                    <SelectTrigger className="border-gray-200 focus:border-green-500 focus:ring-green-500">
                      <SelectValue placeholder="Select your fitness goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bulking">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span>Bulking - Build Muscle Mass</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="cutting">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          <span>Cutting - Lose Fat</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="maintenance">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span>Maintenance - Stay Balanced</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium py-3 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Finding Recipes...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <ChefHat className="h-5 w-5" />
                      Find Recipes
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recipe Results Section */}
      {showRecipes && (
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect Recipes for Your {fitnessGoal} Goals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Here are personalized recipes based on your available ingredients and fitness objectives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {mockRecipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
                >
                  <div className="relative">
                    <Image
                      src={recipe.image || "/placeholder.svg"}
                      alt={recipe.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        <Clock className="h-3 w-3 mr-1" />
                        {recipe.cookTime}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-semibold text-gray-900">{recipe.title}</CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2">{recipe.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{recipe.protein}</div>
                          <div className="text-gray-500">Protein</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">{recipe.calories}</div>
                          <div className="text-gray-500">Calories</div>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleOptimizeWithAI(recipe.id)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Optimize with AI
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Fitness Meal Planner. Fuel your fitness journey with smart nutrition.</p>
        </div>
      </footer>
    </div>
  )
}
