<?php

declare(strict_types=1);

namespace App\Controller\guest;

use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ProjectsController extends AbstractController
{
    #[Route('/projects', name: 'projects')]
    public function projects(ProjectRepository $projectRepository): Response
    {
        $projects = $projectRepository->findAll();

        // Transformer les projets en un tableau d'associatifs
        $projectData = [];
        foreach ($projects as $project) {
            $projectData[] = [
                'id' => $project->getId(),
                'name' => $project->getName(),
                'description' => $project->getDescription(),
                'littleDescription' => $project->getLittleDescription(),
                'picture' => $project->getPicture(),
                'color' => $project->getColor()
            ];
        }

        return $this->render('guest/projects.html.twig', [
            'projects' => $projectData // Passer le tableau transformé
        ]);
    }

}