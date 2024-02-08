import { Schema, models, model } from "mongoose";

const categoriesSchema = new Schema({
  grooming: {
    dog: {
      haircut: [
        {
          FullHaircut: [Boolean],
          ScissorCut: [Boolean],
          HairClipping: [Boolean],
          Dematting: [Boolean],
          DeShedding: [Boolean],
          HairColoring: [Boolean],
          Tattoo: [Boolean],
        },
      ],
      bath: [
        {
          basicBath: [Boolean],
          medicatedBath: [Boolean],
          fleaAndTickBath: [Boolean],
          deodorizingBath: [Boolean],
          oatmealBath: [Boolean],
          puppyBath: [Boolean],
          DryBath: [Boolean],
          DeSheddingBath: [Boolean],
          EarCleaning: [Boolean],
          TeethBrushing: [Boolean],
          AnalGlandExpression: [Boolean],
          SelfServiceDogWash: [Boolean],
        },
      ],

      brushing: [
        {
          regularBrushing: [Boolean],
          deMatting: [Boolean],
          undercoatRemoval: [Boolean],
          sheddingControl: [Boolean],
          Stripping: [Boolean],
          DeShedding: [Boolean],
        },
      ],
      nail: [
        {
          nailTrimming: [Boolean],
          nailGrinding: [Boolean],
          nailPolishing: [Boolean],
          NailClipping: [Boolean],
          NailPainting: [Boolean],
        },
      ],
    },
    cat: {
      haircut: [
        {
          lionCut: [Boolean],
          teddyBearCut: [Boolean],
          bobcatCut: [Boolean],
          roundFaceCut: [Boolean],
          leopardCut: [Boolean],
          shavedCut: [Boolean],
          FullHaircut: [Boolean],
          ScissorCut: [Boolean],
          HairClipping: [Boolean],
          Dematting: [Boolean],
          DeShedding: [Boolean],
          HairColoring: [Boolean],
          Tattoo: [Boolean],
        },
      ],
      bath: [
        {
          basicBath: [Boolean],
          dryShampoo: [Boolean],
          waterlessBath: [Boolean],
          medicatedBath: [Boolean],
          fleaAndTickBath: [Boolean],
          calmingBath: [Boolean],
          basicBath: [Boolean],
          medicatedBath: [Boolean],
          fleaAndTickBath: [Boolean],
          deodorizingBath: [Boolean],
          oatmealBath: [Boolean],
          DryBath: [Boolean],
          DeSheddingBath: [Boolean],
          EarCleaning: [Boolean],
          TeethBrushing: [Boolean],
          AnalGlandExpression: [Boolean],
          SelfServiceDogWash: [Boolean],
        },
      ],
      brushing: [
        {
          regularBrushing: [Boolean],
          deMatting: [Boolean],
          undercoatRemoval: [Boolean],
          dentalBrushing: [Boolean],
          sheddingControl: [Boolean],
        },
      ],
      nail: [
        {
          nailTrimming: [Boolean],
          nailCapsApplication: [Boolean],
          nailPolishing: [Boolean],
        },
      ],
    },
    various: {
      haircut: [
        {
          variousHaircutOption1: [Boolean],
          variousHaircutOption2: [Boolean],
          variousHaircutOption3: [Boolean],
        },
      ],
      bath: [
        {
          variousBathOption1: [Boolean],
          variousBathOption2: [Boolean],
          variousBathOption3: [Boolean],
        },
      ],
      brushing: [
        {
          variousNailOption1: [Boolean],
          variousNailOption2: [Boolean],
          variousNailOption3: [Boolean],
        },
      ],
      nail: [
        {
          variousNailOption1: [Boolean],
          variousNailOption2: [Boolean],
          variousNailOption3: [Boolean],
        },
      ],
    },
  },
  services: {
    dog: [
      {
        petSitting: [Boolean],
        petWalking: [Boolean],
        petTraining: [Boolean],
        petAdoption: [Boolean],
        vets: [Boolean],
        petTaxi: [Boolean],
        petAccommodation: [Boolean],
        petFuneralServices: [Boolean],
        petInsurance: [Boolean],
        petPhotography: [Boolean],
        petFoodDelivery: [Boolean],
      },
    ],
    cat: [
      {
        petSitting: [Boolean],
        petWalking: [Boolean],
        petTraining: [Boolean],
        petAdoption: [Boolean],
        vets: [Boolean],
        petTaxi: [Boolean],
        petAccommodation: [Boolean],
        petFuneralServices: [Boolean],
        petInsurance: [Boolean],
        petPhotography: [Boolean],
        petFoodDelivery: [Boolean],
        catBoarding: [Boolean],
        catHealthCheckup: [Boolean],
        catToysRental: [Boolean],
      },
    ],
    fish: [
      {
        aquariumSetup: [Boolean],
        fishHealthConsultation: [Boolean],
        waterQualityTesting: [Boolean],
        fishTraining: [Boolean],
        fishSitting: [Boolean],
        fishAdoption: [Boolean],
        fishTankCleaning: [Boolean],
        fishFoodDelivery: [Boolean],
      },
    ],
    bird: [
      {
        birdBoarding: [Boolean],
        birdGrooming: [Boolean],
        birdTraining: [Boolean],
        birdPhotography: [Boolean],
        birdHealthCheckup: [Boolean],
        birdSitting: [Boolean],
        birdAdoption: [Boolean],
        birdTaxi: [Boolean],
        birdFoodDelivery: [Boolean],
      },
    ],
    reptile: [
      {
        reptileBoarding: [Boolean],
        reptileGrooming: [Boolean],
        reptileHealthCheckup: [Boolean],
        reptileTraining: [Boolean],
        reptileSitting: [Boolean],
        reptileAdoption: [Boolean],
        reptileTaxi: [Boolean],
        reptileFoodDelivery: [Boolean],
      },
    ],
    smallAnimal: [
      {
        smallAnimalBoarding: [Boolean],
        grooming: [Boolean],
        veterinaryCare: [Boolean],
        smallAnimalTraining: [Boolean],
        feedingServices: [Boolean],
      },
    ],
    exotic: [
      {
        exoticBoarding: [Boolean],
        exoticGrooming: [Boolean],
        exoticHealthCheckup: [Boolean],
        exoticTraining: [Boolean],
        exoticSitting: [Boolean],
        exoticAdoption: [Boolean],
        exoticTaxi: [Boolean],
        exoticFoodDelivery: [Boolean],
      },
    ],
    horse: [
      {
        horseBoarding: [Boolean],
        horseTraining: [Boolean],
        grooming: [Boolean],
        veterinaryServices: [Boolean],
        ridingLessons: [Boolean],
        transportation: [Boolean],
        equineMassage: [Boolean],
      },
    ],
    insect: [
      {
        educationalPrograms: [Boolean],
        habitatSetupAssistance: [Boolean],
        healthConsultation: [Boolean],
        handlingClasses: [Boolean],
        breedingAssistance: [Boolean],
      },
    ],
    farm: [
      {
        feedingServices: [Boolean],
        veterinaryCare: [Boolean],
        breedingAssistance: [Boolean],
        farmSitting: [Boolean],
        shearingServices: [Boolean],
        herdingServices: [Boolean],
      },
    ],
  },
  supplies: {
    dog: [
      {
        food: [Boolean],
        treats: [Boolean],
        toys: [Boolean],
        beds: [Boolean],
        bowls: [Boolean],
        grooming: [Boolean],
        health: [Boolean],
        collars: [Boolean],
        leashes: [Boolean],
        crates: [Boolean],
        trainingAids: [Boolean],
        travel: [Boolean],
        clothing: [Boolean],
        dentalCare: [Boolean],
        feedingAccessories: [Boolean],
        carriers: [Boolean],
        outdoorGear: [Boolean],
        hygieneProducts: [Boolean],
      },
    ],
    cat: [
      {
        litterBoxes: [Boolean],
        catLitter: [Boolean],
        scratchingPosts: [Boolean],
        catFurniture: [Boolean],
        catToys: [Boolean],
        catFood: [Boolean],
        treats: [Boolean],
        foodBowls: [Boolean],
        waterBowls: [Boolean],
        groomingTools: [Boolean],
        carriers: [Boolean],
        collars: [Boolean],
        leashes: [Boolean],
        catBeds: [Boolean],
        catClothes: [Boolean],
        catHealthSupplies: [Boolean],
        catTreatments: [Boolean],
        catHygieneProducts: [Boolean],
        catDentalCare: [Boolean],
      },
    ],
    fish: [
      {
        food: [Boolean],
        aquariums: [Boolean],
        decorations: [Boolean],
        filters: [Boolean],
        heaters: [Boolean],
        waterConditioners: [Boolean],
        airPumps: [Boolean],
        fishMedication: [Boolean],
        fishFood: [Boolean],
        fishTanks: [Boolean],
        fishToys: [Boolean],
        gravel: [Boolean],
        lighting: [Boolean],
        pumps: [Boolean],
        testingKits: [Boolean],
        fishNets: [Boolean],
        fishBowls: [Boolean],
        fishAccessories: [Boolean],
      },
    ],
    bird: [
      {
        cages: [Boolean],
        perches: [Boolean],
        toys: [Boolean],
        foodBowls: [Boolean],
        waterBowls: [Boolean],
        birdFood: [Boolean],
        treats: [Boolean],
        cuttlebones: [Boolean],
        groomingTools: [Boolean],
        nestBoxes: [Boolean],
        birdCarriers: [Boolean],
        heaters: [Boolean],
        lighting: [Boolean],
        cageAccessories: [Boolean],
        cleaningSupplies: [Boolean],
        healthSupplies: [Boolean],
        trainingAids: [Boolean],
        mirrors: [Boolean],
        swings: [Boolean],
      },
    ],
    reptile: [
      {
        enclosures: [Boolean],
        heating: [Boolean],
        lighting: [Boolean],
        substrates: [Boolean],
        decorations: [Boolean],
        hides: [Boolean],
        feedingDishes: [Boolean],
        waterBowls: [Boolean],
        thermometers: [Boolean],
        hygrometers: [Boolean],
        thermostats: [Boolean],
        supplements: [Boolean],
        cleaningSupplies: [Boolean],
        handlingTools: [Boolean],
        healthSupplies: [Boolean],
        cages: [Boolean],
        feeders: [Boolean],
        humidifiers: [Boolean],
        incubators: [Boolean],
        breedingSupplies: [Boolean],
      },
    ],
    smallAnimal: [
      {
        feed: [Boolean],
        bedding: [Boolean],
        cages: [Boolean],
        toys: [Boolean],
        groomingTools: [Boolean],
        healthSupplements: [Boolean],
        treats: [Boolean],
        veterinarySupplies: [Boolean],
      },
    ],
    exotic: [
      {
        habitat: [Boolean],
        food: [Boolean],
        treats: [Boolean],
        toys: [Boolean],
        healthSupplements: [Boolean],
        grooming: [Boolean],
        enclosures: [Boolean],
        heating: [Boolean],
        lighting: [Boolean],
        decorations: [Boolean],
        specialtyItems: [Boolean],
      },
    ],
    horse: [
      {
        feed: [Boolean],
        groomingTools: [Boolean],
        saddles: [Boolean],
        ridingGear: [Boolean],
        healthSupplements: [Boolean],
        stableEquipment: [Boolean],
        horseToys: [Boolean],
        veterinarySupplies: [Boolean],
      },
    ],
    insect: [
      {
        habitatSetup: [Boolean],
        food: [Boolean],
        breedingSupplies: [Boolean],
        educationalMaterials: [Boolean],
        handlingTools: [Boolean],
        healthSupplements: [Boolean],
        specialtyItems: [Boolean],
      },
    ],
    farm: [
      {
        feed: [Boolean],
        bedding: [Boolean],
        healthSupplements: [Boolean],
        groomingTools: [Boolean],
        farmFencing: [Boolean],
        milkingEquipment: [Boolean],
        poultrySupplies: [Boolean],
        veterinarySupplies: [Boolean],
      },
    ],
  },
});

export const CategoriesModel =
  models?.CategoriesModel || model("CategoriesModel", categoriesSchema);
