<?php

namespace App\Entity;

use App\Repository\PictureSiteRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PictureSiteRepository::class)]
class PictureSite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nameSite = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $picture = null;

    #[ORM\ManyToOne(targetEntity: Project::class, inversedBy: 'pictures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Project $project = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameSite(): ?string
    {
        return $this->nameSite;
    }

    public function setNameSite(string $nameSite): static
    {
        $this->nameSite = $nameSite;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): static
    {
        $this->picture = $picture;

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): static
    {
        $this->project = $project;

        return $this;
    }
}
