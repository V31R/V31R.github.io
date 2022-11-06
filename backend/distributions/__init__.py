from distributions.alpha_distribution import AlphaDistribution
from distributions.distribution_template import DistributionTemplate
from distributions.distributions_service import DistributionsService
from distributions.lognorm_distribution import LognormDistribution
from distributions.norm_distribution import NormDistribution


def init_distribution(distribution: DistributionTemplate):
    distribution.register(DistributionsService())
    distribution.subscribe()
    return distribution


norm_distribution = init_distribution(NormDistribution())
lognorm_distribution = init_distribution(LognormDistribution())
alpha_distribution = init_distribution(AlphaDistribution())
